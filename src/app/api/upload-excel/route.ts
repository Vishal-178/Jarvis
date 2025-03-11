import { NextRequest, NextResponse } from "next/server";
import * as xlsx from "xlsx";
import { db } from "@/lib/firebase";
import { doc, setDoc, collection, addDoc, getDocs, deleteDoc } from "firebase/firestore";

export async function POST(req: NextRequest) {
  try {
    // Get the uploaded file from FormData
    const formData = await req.formData();
    const file = formData.get("file") as Blob | null;

    if (!file) {
      return NextResponse.json({ success: false, error: "No file uploaded" }, { status: 400 });
    }

    // Convert Blob to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Read Excel file
    const workbook = xlsx.read(buffer, { type: "buffer" });

    // Sheets that should only have a single document
    const singleObjectSheets = ["detail", "monthly", "Weekly", "Daily", "Fundamentals"];

    // Sheets that should be **fully replaced** on each upload
    const multiObjectSheets = [
      "Income Statement",
      "Balance Sheet",
      "Cash Flow",
      "Shareholding Pattern",
      "Promoters or Management"
    ];

    // Extract data from all sheets
    const allSheetsData: Record<string, any[]> = {};

    workbook.SheetNames.forEach((sheetName) => {
      const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]); // Convert sheet to JSON
      allSheetsData[sheetName] = sheetData;
    });

    // Iterate over all sheets and update Firestore
    for (const sheetName in allSheetsData) {
      const sheetData = allSheetsData[sheetName];

      if (singleObjectSheets.includes(sheetName)) {
        // ✅ Store as a single document (overwrite previous data)
        const docRef = doc(db, "cskData", sheetName);
        await setDoc(docRef, sheetData[0] || {}, { merge: true });

      } else if (multiObjectSheets.includes(sheetName)) {
        // ✅ DELETE all previous documents in the collection before adding new ones
        const collectionRef = collection(db, "cskData", sheetName, "entries");

        // Get all existing docs and delete them
        const existingDocs = await getDocs(collectionRef);
        existingDocs.forEach(async (docSnap) => {
          await deleteDoc(docSnap.ref);
        });

        // ✅ Add new data from the uploaded file
        for (const entry of sheetData) {
          await addDoc(collectionRef, entry);
        }
      }
    }

    return NextResponse.json({ success: true, message: "Data updated successfully" });

  } catch (error) {
    console.error("Error processing file:", error);
    return NextResponse.json({ success: false, error: "Failed to process file" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export async function GET(req: NextRequest) {
  try {
    // Define sheet categories
    const singleObjectSheets = ["detail", "monthly", "Weekly", "Daily", "Fundamentals"];
    const multiObjectSheets = [
      "Income Statement",
      "Balance Sheet",
      "Cash Flow",
      "Shareholding Pattern",
      "Promoters or Management"
    ];

    // Object to store all retrieved data
    const allData: Record<string, any> = {};

    // Fetch single-object sheets
    for (const sheetName of singleObjectSheets) {
      const docRef = doc(db, "cskData", sheetName);
      const docSnap = await getDoc(docRef);

      allData[sheetName] = docSnap.exists() ? docSnap.data() : {};
    }

    // Fetch multi-object sheets
    for (const sheetName of multiObjectSheets) {
      const collectionRef = collection(db, "cskData", sheetName, "entries");
      const querySnapshot = await getDocs(collectionRef);

      allData[sheetName] = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Include document ID
        ...doc.data()
      }));
    }

    return NextResponse.json({ success: true, data: allData });

  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ success: false, error: "Failed to fetch data" }, { status: 500 });
  }
}

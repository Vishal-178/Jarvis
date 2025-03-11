import { google } from "googleapis";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  try {
    // Read the credentials.json file
    const credentials = {
      type: process.env.TYPE,
      project_id: process.env.PROJECT_ID,
      private_key: process.env.PRIVATE_KEY, // Fix new lines
      client_email: process.env.CLIENT_EMAIL,
      client_id: process.env.CLIENT_ID,
      token_uri: process.env.TOKEN_URI,
    };
    

    const auth = new google.auth.JWT(
      credentials.client_email,
      undefined,
      credentials.private_key,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    const sheets = google.sheets({ version: "v4", auth });

    const { name, email, phone, quantity, message, buyOrSell } = await req.json();
    const formattedPhone = `'${phone}`;

    const spreadsheetId = process.env.SPREADSHEET_ID;
    const range = "Sheet1"; // Simplified range

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, email, formattedPhone, quantity, message, buyOrSell]],
      },
    });

    return NextResponse.json({ success: true, response: response.data });

  } catch (error) {
    console.error("Error updating sheet:", error);
    return NextResponse.json(
      { success: false, error: JSON.stringify(error) },
      { status: 500 }
    );
  }
}

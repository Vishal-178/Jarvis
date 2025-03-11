import { google } from "googleapis";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  try {
    // Read the credentials.json file
    const credentials = {
      type: process.env.NEXT_PUBLIC_TYPE,
      project_id: process.env.NEXT_PUBLIC_PROJECT_ID,
      private_key_id: process.env.NEXT_PUBLIC_PRIVATE_KEY_ID,
      private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY.replace(/\\n/g, '\n'), // Ensure line breaks are handled correctly
      client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
      client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
      auth_uri: process.env.NEXT_PUBLIC_AUTH_URI,
      token_uri: process.env.NEXT_PUBLIC_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.NEXT_PUBLIC_AUTH_PROVIDER_X509_CERT_URL,
      client_x509_cert_url: process.env.NEXT_PUBLIC_CLIENT_X509_CERT_URL,
      universe_domain: process.env.NEXT_PUBLIC_UNIVERSE_DOMAIN
    };
    

    const auth = new google.auth.JWT(
      credentials.client_email,
      undefined,
      credentials.private_key.replace(/\\n/g, "\n"),
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    const sheets = google.sheets({ version: "v4", auth });

    const { name, email, phone, quantity, message, buyOrSell } = await req.json();
    const formattedPhone = `'${phone}`;

    const spreadsheetId = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
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
      { success: false, error: "Failed to update sheet" },
      { status: 500 }
    );
  }
}

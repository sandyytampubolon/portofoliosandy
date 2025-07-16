import "../Styles/Globals.css";

export const metadata = {
  title: "Sandy Tampubolon – Portfolio",
  description: "Personal website of Sandy Tampubolon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

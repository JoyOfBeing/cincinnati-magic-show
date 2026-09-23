import "./globals.css";

export const metadata = {
  title: "Cincinnati Magic Show | An Immersive Experience",
  description: "Step through the door. An immersive, invite-only experience coming to Cincinnati.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import '@/app/styles/globals.css';
import { AppLayout } from '@/widgets/AppLayout';
import { ThemeProvider, AppInitializer } from '@/shared/ui';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeProvider>
          <AppInitializer>
            <AppLayout>{children}</AppLayout>
          </AppInitializer>
        </ThemeProvider>
      </body>
    </html>
  );
}

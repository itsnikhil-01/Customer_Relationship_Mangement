'use client';

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { People, Dashboard, Campaign, Analytics, Settings } from '@mui/icons-material';
import Link from 'next/link';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const navigationItems = [
  { name: 'Dashboard', icon: <Dashboard />, href: '/' },
  { name: 'Customers', icon: <People />, href: '/customers' },
  { name: 'Campaigns', icon: <Campaign />, href: '/campaigns' },
  { name: 'Analytics', icon: <Analytics />, href: '/analytics' },
  { name: 'Settings', icon: <Settings />, href: '/settings' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AppBar position="static" elevation={0}>
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  CRM System
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          px: 2,
                          py: 1,
                          borderRadius: 1,
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          },
                        }}
                      >
                        {item.icon}
                        <Typography variant="body2">{item.name}</Typography>
                      </Box>
                    </Link>
                  ))}
                </Box>
              </Toolbar>
            </AppBar>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              {children}
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
} 
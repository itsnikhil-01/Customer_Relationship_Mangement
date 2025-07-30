'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {
  TrendingUp,
  TrendingDown,
  People,
  AttachMoney,
  Campaign,
  Email,
  Phone,
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

const salesData = [
  { month: 'Jan', sales: 4000, leads: 2400, conversions: 1200 },
  { month: 'Feb', sales: 3000, leads: 1398, conversions: 900 },
  { month: 'Mar', sales: 2000, leads: 9800, conversions: 600 },
  { month: 'Apr', sales: 2780, leads: 3908, conversions: 800 },
  { month: 'May', sales: 1890, leads: 4800, conversions: 500 },
  { month: 'Jun', sales: 2390, leads: 3800, conversions: 700 },
];

const campaignPerformance = [
  { name: 'Email Newsletter', sent: 5000, opened: 1500, clicked: 450, conversion: 9 },
  { name: 'SMS Campaign', sent: 2000, opened: 1800, clicked: 600, conversion: 30 },
  { name: 'Social Media', sent: 10000, opened: 3000, clicked: 900, conversion: 9 },
  { name: 'Direct Mail', sent: 1500, opened: 750, clicked: 225, conversion: 15 },
];

const leadSources = [
  { name: 'Website', value: 45, color: '#0088FE' },
  { name: 'Social Media', value: 25, color: '#00C49F' },
  { name: 'Email', value: 20, color: '#FFBB28' },
  { name: 'Referral', value: 10, color: '#FF8042' },
];

const topCustomers = [
  { name: 'John Doe', company: 'Tech Corp', revenue: 15000, deals: 3 },
  { name: 'Jane Smith', company: 'Marketing Inc', revenue: 12000, deals: 2 },
  { name: 'Mike Johnson', company: 'Sales Solutions', revenue: 9000, deals: 1 },
  { name: 'Sarah Wilson', company: 'Consulting Group', revenue: 8000, deals: 2 },
];

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('6months');

  const totalRevenue = salesData.reduce((sum, item) => sum + item.sales, 0);
  const totalLeads = salesData.reduce((sum, item) => sum + item.leads, 0);
  const totalConversions = salesData.reduce((sum, item) => sum + item.conversions, 0);
  const conversionRate = ((totalConversions / totalLeads) * 100).toFixed(1);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">Analytics</Typography>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Time Range</InputLabel>
          <Select
            value={timeRange}
            label="Time Range"
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <MenuItem value="1month">Last Month</MenuItem>
            <MenuItem value="3months">Last 3 Months</MenuItem>
            <MenuItem value="6months">Last 6 Months</MenuItem>
            <MenuItem value="1year">Last Year</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Key Metrics */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    Total Revenue
                  </Typography>
                  <Typography variant="h4">${totalRevenue.toLocaleString()}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <TrendingUp sx={{ color: 'success.main', mr: 1 }} />
                    <Typography variant="body2" color="success.main">
                      +12% from last period
                    </Typography>
                  </Box>
                </Box>
                <AttachMoney sx={{ fontSize: 40, color: 'success.main' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    Total Leads
                  </Typography>
                  <Typography variant="h4">{totalLeads.toLocaleString()}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <TrendingUp sx={{ color: 'success.main', mr: 1 }} />
                    <Typography variant="body2" color="success.main">
                      +8% from last period
                    </Typography>
                  </Box>
                </Box>
                <People sx={{ fontSize: 40, color: 'primary.main' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    Conversion Rate
                  </Typography>
                  <Typography variant="h4">{conversionRate}%</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <TrendingDown sx={{ color: 'error.main', mr: 1 }} />
                    <Typography variant="body2" color="error.main">
                      -2% from last period
                    </Typography>
                  </Box>
                </Box>
                <Campaign sx={{ fontSize: 40, color: 'warning.main' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    Active Campaigns
                  </Typography>
                  <Typography variant="h4">12</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <TrendingUp sx={{ color: 'success.main', mr: 1 }} />
                    <Typography variant="body2" color="success.main">
                      +3 new this month
                    </Typography>
                  </Box>
                </Box>
                <Email sx={{ fontSize: 40, color: 'secondary.main' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3}>
        {/* Sales Trend */}
        <Grid item xs={12} lg={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Sales & Leads Trend
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="sales" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="leads" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="conversions" stackId="1" stroke="#ffc658" fill="#ffc658" />
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Lead Sources */}
        <Grid item xs={12} lg={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Lead Sources
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={leadSources}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {leadSources.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Campaign Performance */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Campaign Performance
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={campaignPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sent" fill="#8884d8" />
                <Bar dataKey="opened" fill="#82ca9d" />
                <Bar dataKey="clicked" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Top Customers */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Top Customers
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Customer</TableCell>
                    <TableCell>Company</TableCell>
                    <TableCell align="right">Revenue</TableCell>
                    <TableCell align="right">Deals</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {topCustomers.map((customer, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Typography variant="subtitle2">{customer.name}</Typography>
                      </TableCell>
                      <TableCell>{customer.company}</TableCell>
                      <TableCell align="right">${customer.revenue.toLocaleString()}</TableCell>
                      <TableCell align="right">{customer.deals}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Conversion Funnel */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Conversion Funnel
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Leads Generated</Typography>
                  <Typography variant="body2">25,680</Typography>
                </Box>
                <Box sx={{ width: '100%', bgcolor: 'grey.200', borderRadius: 1, height: 8 }}>
                  <Box sx={{ width: '100%', bgcolor: 'primary.main', height: 8, borderRadius: 1 }} />
                </Box>
              </Box>
              
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Qualified Leads</Typography>
                  <Typography variant="body2">12,840</Typography>
                </Box>
                <Box sx={{ width: '100%', bgcolor: 'grey.200', borderRadius: 1, height: 8 }}>
                  <Box sx={{ width: '50%', bgcolor: 'secondary.main', height: 8, borderRadius: 1 }} />
                </Box>
              </Box>
              
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Proposals Sent</Typography>
                  <Typography variant="body2">6,420</Typography>
                </Box>
                <Box sx={{ width: '100%', bgcolor: 'grey.200', borderRadius: 1, height: 8 }}>
                  <Box sx={{ width: '25%', bgcolor: 'warning.main', height: 8, borderRadius: 1 }} />
                </Box>
              </Box>
              
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Deals Closed</Typography>
                  <Typography variant="body2">1,284</Typography>
                </Box>
                <Box sx={{ width: '100%', bgcolor: 'grey.200', borderRadius: 1, height: 8 }}>
                  <Box sx={{ width: '5%', bgcolor: 'success.main', height: 8, borderRadius: 1 }} />
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
} 
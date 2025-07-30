'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Paper,
} from '@mui/material';
import {
  Add,
  Campaign,
  Email,
  Phone,
  Schedule,
  TrendingUp,
  People,
  Edit,
  Delete,
  PlayArrow,
  Pause,
  Stop,
} from '@mui/icons-material';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface Campaign {
  id: string;
  name: string;
  type: 'email' | 'sms' | 'social';
  status: 'draft' | 'active' | 'paused' | 'completed';
  targetAudience: number;
  sent: number;
  opened: number;
  clicked: number;
  conversionRate: number;
  startDate: string;
  endDate: string;
  budget: number;
  spent: number;
}

const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'Q1 Email Newsletter',
    type: 'email',
    status: 'active',
    targetAudience: 5000,
    sent: 4500,
    opened: 1350,
    clicked: 450,
    conversionRate: 10,
    startDate: '2024-01-01',
    endDate: '2024-03-31',
    budget: 5000,
    spent: 3200,
  },
  {
    id: '2',
    name: 'Product Launch SMS',
    type: 'sms',
    status: 'completed',
    targetAudience: 2000,
    sent: 2000,
    opened: 1800,
    clicked: 600,
    conversionRate: 30,
    startDate: '2024-01-15',
    endDate: '2024-01-30',
    budget: 2000,
    spent: 2000,
  },
  {
    id: '3',
    name: 'Social Media Campaign',
    type: 'social',
    status: 'draft',
    targetAudience: 10000,
    sent: 0,
    opened: 0,
    clicked: 0,
    conversionRate: 0,
    startDate: '2024-02-01',
    endDate: '2024-02-28',
    budget: 8000,
    spent: 0,
  },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active': return 'success';
    case 'draft': return 'default';
    case 'paused': return 'warning';
    case 'completed': return 'info';
    default: return 'default';
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'email': return <Email />;
    case 'sms': return <Phone />;
    case 'social': return <Campaign />;
    default: return <Campaign />;
  }
};

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>(mockCampaigns);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingCampaign, setEditingCampaign] = useState<Campaign | null>(null);

  const totalCampaigns = campaigns.length;
  const activeCampaigns = campaigns.filter(c => c.status === 'active').length;
  const totalBudget = campaigns.reduce((sum, c) => sum + c.budget, 0);
  const totalSpent = campaigns.reduce((sum, c) => sum + c.spent, 0);

  const chartData = [
    { name: 'Email', value: campaigns.filter(c => c.type === 'email').length },
    { name: 'SMS', value: campaigns.filter(c => c.type === 'sms').length },
    { name: 'Social', value: campaigns.filter(c => c.type === 'social').length },
  ];

  const handleAddCampaign = () => {
    setEditingCampaign(null);
    setOpenDialog(true);
  };

  const handleEditCampaign = (campaign: Campaign) => {
    setEditingCampaign(campaign);
    setOpenDialog(true);
  };

  const handleDeleteCampaign = (id: string) => {
    setCampaigns(campaigns.filter(c => c.id !== id));
  };

  const handleSaveCampaign = (campaignData: Partial<Campaign>) => {
    if (editingCampaign) {
      setCampaigns(campaigns.map(c => c.id === editingCampaign.id ? { ...c, ...campaignData } : c));
    } else {
      const newCampaign: Campaign = {
        id: Date.now().toString(),
        name: campaignData.name || '',
        type: campaignData.type as 'email' | 'sms' | 'social' || 'email',
        status: 'draft',
        targetAudience: campaignData.targetAudience || 0,
        sent: 0,
        opened: 0,
        clicked: 0,
        conversionRate: 0,
        startDate: campaignData.startDate || '',
        endDate: campaignData.endDate || '',
        budget: campaignData.budget || 0,
        spent: 0,
      };
      setCampaigns([...campaigns, newCampaign]);
    }
    setOpenDialog(false);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4">Campaigns</Typography>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={handleAddCampaign}
        >
          Create Campaign
        </Button>
      </Box>

      {/* Statistics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    Total Campaigns
                  </Typography>
                  <Typography variant="h4">{totalCampaigns}</Typography>
                </Box>
                <Campaign sx={{ fontSize: 40, color: 'primary.main' }} />
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
                  <Typography variant="h4">{activeCampaigns}</Typography>
                </Box>
                <TrendingUp sx={{ fontSize: 40, color: 'success.main' }} />
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
                    Total Budget
                  </Typography>
                  <Typography variant="h4">${totalBudget.toLocaleString()}</Typography>
                </Box>
                <People sx={{ fontSize: 40, color: 'warning.main' }} />
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
                    Total Spent
                  </Typography>
                  <Typography variant="h4">${totalSpent.toLocaleString()}</Typography>
                </Box>
                <Schedule sx={{ fontSize: 40, color: 'secondary.main' }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Campaigns Grid */}
      <Grid container spacing={3}>
        {campaigns.map((campaign) => (
          <Grid item xs={12} md={6} lg={4} key={campaign.id}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      {campaign.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      {getTypeIcon(campaign.type)}
                      <Chip
                        label={campaign.status}
                        color={getStatusColor(campaign.status) as any}
                        size="small"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <IconButton size="small" onClick={() => handleEditCampaign(campaign)}>
                      <Edit />
                    </IconButton>
                    <IconButton size="small" color="error" onClick={() => handleDeleteCampaign(campaign.id)}>
                      <Delete />
                    </IconButton>
                  </Box>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="textSecondary">
                    Progress: {campaign.sent}/{campaign.targetAudience}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={(campaign.sent / campaign.targetAudience) * 100}
                    sx={{ mt: 1 }}
                  />
                </Box>

                <Grid container spacing={1} sx={{ mb: 2 }}>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                      Opened
                    </Typography>
                    <Typography variant="h6">{campaign.opened}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                      Clicked
                    </Typography>
                    <Typography variant="h6">{campaign.clicked}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                      Conversion
                    </Typography>
                    <Typography variant="h6">{campaign.conversionRate}%</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="textSecondary">
                      Budget Used
                    </Typography>
                    <Typography variant="h6">
                      ${campaign.spent}/${campaign.budget}
                    </Typography>
                  </Grid>
                </Grid>

                <Box sx={{ display: 'flex', gap: 1 }}>
                  {campaign.status === 'draft' && (
                    <Button size="small" variant="contained" startIcon={<PlayArrow />}>
                      Launch
                    </Button>
                  )}
                  {campaign.status === 'active' && (
                    <Button size="small" variant="outlined" startIcon={<Pause />}>
                      Pause
                    </Button>
                  )}
                  {campaign.status === 'paused' && (
                    <Button size="small" variant="contained" startIcon={<PlayArrow />}>
                      Resume
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Campaign Type Distribution Chart */}
      <Paper sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Campaign Type Distribution
        </Typography>
        <Box sx={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Box>
      </Paper>

      {/* Campaign Dialog */}
      <CampaignDialog
        open={openDialog}
        campaign={editingCampaign}
        onClose={() => setOpenDialog(false)}
        onSave={handleSaveCampaign}
      />
    </Box>
  );
}

interface CampaignDialogProps {
  open: boolean;
  campaign: Campaign | null;
  onClose: () => void;
  onSave: (campaignData: Partial<Campaign>) => void;
}

function CampaignDialog({ open, campaign, onClose, onSave }: CampaignDialogProps) {
  const [formData, setFormData] = useState({
    name: campaign?.name || '',
    type: campaign?.type || 'email',
    targetAudience: campaign?.targetAudience || 0,
    startDate: campaign?.startDate || '',
    endDate: campaign?.endDate || '',
    budget: campaign?.budget || 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        {campaign ? 'Edit Campaign' : 'Create New Campaign'}
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Campaign Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              fullWidth
            />
            <FormControl fullWidth>
              <InputLabel>Campaign Type</InputLabel>
              <Select
                value={formData.type}
                label="Campaign Type"
                onChange={(e) => setFormData({ ...formData, type: e.target.value as any })}
              >
                <MenuItem value="email">Email</MenuItem>
                <MenuItem value="sms">SMS</MenuItem>
                <MenuItem value="social">Social Media</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Target Audience"
              type="number"
              value={formData.targetAudience}
              onChange={(e) => setFormData({ ...formData, targetAudience: parseInt(e.target.value) || 0 })}
              required
              fullWidth
            />
            <TextField
              label="Start Date"
              type="date"
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              required
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="End Date"
              type="date"
              value={formData.endDate}
              onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
              required
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Budget"
              type="number"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: parseInt(e.target.value) || 0 })}
              required
              fullWidth
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            {campaign ? 'Update' : 'Create'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
} 
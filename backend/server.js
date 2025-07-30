const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const customerRoutes = require('./routes/customers');
const userRoutes = require('./routes/users');
const salesPipelineRoutes = require('./routes/salesPipelines');
const campaignRoutes = require('./routes/campaigns');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/crm', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/customers', customerRoutes);
app.use('/api/users', userRoutes);
app.use('/api/sales-pipelines', salesPipelineRoutes);
app.use('/api/campaigns', campaignRoutes);

app.listen(5000, () => console.log('Server running on port 5000')); 
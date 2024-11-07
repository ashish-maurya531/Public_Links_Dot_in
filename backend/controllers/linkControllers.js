




// const Link = require('../models/Link');

// exports.getLinks = async (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const limit = parseInt(req.query.limit) || 10;

//   try {
//     const links = await Link.find()
//       .sort({ createdAt: -1 })
//       .skip((page - 1) * limit)
//       .limit(limit);

//     res.status(200).json(links);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching links' });
//   }
// };

// exports.createLink = async (req, res) => {
//   const { url, requiresVpn } = req.body;

//   try {
//     const newLink = new Link({ url, requiresVpn });
//     await newLink.save();
//     res.status(201).json(newLink);
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ error: 'Error creating link' });
//   }
// };

// exports.searchLink = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const link = await Link.findOne({ linkId: id });
//     if (link) {
//       res.status(200).json(link);
//     } else {
//       res.status(404).json({ error: 'Link not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Error searching for link' });
//   }
// };

// exports.filterLinks = async (req, res) => {
//   const { timeframe, date } = req.query;

//   try {
//     let query = {};
//     const now = new Date();

//     if (timeframe) {
//       switch (timeframe) {
//         case '1h':
//           query.createdAt = { $gte: new Date(now - 60 * 60 * 1000) };
//           break;
//         case '6h':
//           query.createdAt = { $gte: new Date(now - 6 * 60 * 60 * 1000) };
//           break;
//         case '1d':
//           query.createdAt = { $gte: new Date(now - 24 * 60 * 60 * 1000) };
//           break;
//         case '1w':
//           query.createdAt = { $gte: new Date(now - 7 * 24 * 60 * 60 * 1000) };
//           break;
//         case '1m':
//           query.createdAt = { $gte: new Date(now - 30 * 24 * 60 * 60 * 1000) };
//           break;
//         case '1y':
//           query.createdAt = { $gte: new Date(now - 365 * 24  * 60 * 60 * 1000) };
//           break;
//       }
//     } else if (date) {
//       query.createdAt = { $gte: new Date(date) };
//     }

//     const links = await Link.find(query).sort({ createdAt: -1 });
//     res.status(200).json(links);
//   } catch (error) {
//     res.status(500).json({ error: 'Error filtering links' });
//   }
// };

























// const Link = require('../models/Link');

// // Utility function to build date filter
// const getDateFilter = (filterType) => {
//   const now = new Date();
//   switch (filterType) {
//     case '1hour':
//       return { createdAt: { $gte: new Date(now - 60 * 60 * 1000) } };
//     case '6hours':
//       return { createdAt: { $gte: new Date(now - 6 * 60 * 60 * 1000) } };
//     case '1day':
//       return { createdAt: { $gte: new Date(now - 24 * 60 * 60 * 1000) } };
//     case '1week':
//       return { createdAt: { $gte: new Date(now - 7 * 24 * 60 * 60 * 1000) } };
//     case '1month':
//       return { createdAt: { $gte: new Date(now - 30 * 24 * 60 * 60 * 1000) } };
//     case '1year':
//       return { createdAt: { $gte: new Date(now - 365 * 24 * 60 * 60 * 1000) } };
//     case 'custom':
//       return (startDate, endDate) => ({
//         createdAt: {
//           $gte: new Date(startDate),
//           $lte: new Date(endDate)
//         }
//       });
//     default:
//       return {};
//   }
// };

// // Get links with pagination and optional filtering
// exports.getLinks = async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 10;
//     const skip = (page - 1) * limit;
//     const filterType = req.query.filter;
//     const { startDate, endDate } = req.query;

//     let dateFilter = {};
//     if (filterType === 'custom' && startDate && endDate) {
//       dateFilter = getDateFilter('custom')(startDate, endDate);
//     } else if (filterType) {
//       dateFilter = getDateFilter(filterType);
//     }

//     const links = await Link.find(dateFilter)
//       .sort({ createdAt: -1 })
//       .skip(skip)
//       .limit(limit);

//     const total = await Link.countDocuments(dateFilter);
//     const hasMore = total > skip + links.length;

//     res.json({
//       links,
//       hasMore,
//       total,
//       currentPage: page
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Create new link
// exports.createLink = async (req, res) => {
//   try {
//     const { url, requiresVpn } = req.body;
//     const link = new Link({
//       url,
//       requiresVpn: requiresVpn || false
//     });
//     const savedLink = await link.save();
//     res.status(201).json(savedLink);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Search link by ID
// exports.searchLink = async (req, res) => {
//   try {
//     const linkId = parseInt(req.params.id);
//     const link = await Link.findOne({ linkId });
    
//     if (!link) {
//       return res.status(404).json({ message: 'Link not found' });
//     }
    
//     res.json(link);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get links after a specific timestamp (for real-time updates)
// exports.getNewLinks = async (req, res) => {
//   try {
//     const { lastUpdate } = req.query;
//     const query = lastUpdate 
//       ? { createdAt: { $gt: new Date(lastUpdate) } }
//       : {};

//     const newLinks = await Link.find(query)
//       .sort({ createdAt: -1 })
//       .limit(10);

//     res.json(newLinks);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Filter links by date range
// exports.filterLinks = async (req, res) => {
//   try {
//     const { filterType, startDate, endDate, page = 4, limit = 10 } = req.query;
//     const skip = (page - 1) * limit;

//     let dateFilter = {};
//     if (filterType === 'custom' && startDate && endDate) {
//       dateFilter = getDateFilter('custom')(startDate, endDate);
//     } else if (filterType) {
//       dateFilter = getDateFilter(filterType);
//     }

//     const links = await Link.find(dateFilter)
//       .sort({ createdAt: -1 })
//       .skip(skip)
//       .limit(limit);

//     const total = await Link.countDocuments(dateFilter);
//     const hasMore = total > skip + links.length;

//     res.json({
//       links,
//       hasMore,
//       total,
//       currentPage: parseInt(page)
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };






// const Link = require('../models/Link');

// // Get links with pagination
// exports.getLinks = async (req, res) => {
//   try {
//     const page = parseInt(req.query.page) || 1;
//     const limit = parseInt(req.query.limit) || 10;
//     const skip = (page - 1) * limit;

//     const links = await Link.find()
//       .sort({ createdAt: -1 })
//       .skip(skip)
//       .limit(limit);

//     const total = await Link.countDocuments();
//     const hasMore = total > skip + links.length;

//     res.json({
//       links,
//       hasMore,
//       total,
//       currentPage: page
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Create new link
// exports.createLink = async (req, res) => {
//   try {
//     const { url, requiresVpn } = req.body;
//     const link = new Link({
//       url,
//       requiresVpn: requiresVpn || false
//     });
//     const savedLink = await link.save();
//     res.status(201).json(savedLink);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Search link by ID
// exports.searchLink = async (req, res) => {
//   try {
//     const linkId = parseInt(req.params.id);
//     const link = await Link.findOne({ linkId });
    
//     if (!link) {
//       return res.status(404).json({ message: 'Link not found' });
//     }
    
//     res.json(link);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get new links after a specific timestamp
// exports.getNewLinks = async (req, res) => {
//   try {
//     const { lastUpdate } = req.query;
//     const query = lastUpdate 
//       ? { createdAt: { $gt: new Date(lastUpdate) } }
//       : {};

//     const newLinks = await Link.find(query)
//       .sort({ createdAt: -1 })
//       .limit(10);

//     res.json(newLinks);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };



const Link = require('../models/Link');

// Get links with pagination
exports.getLinks = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const links = await Link.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Link.countDocuments();
    const hasMore = total > skip + links.length;

    res.json({
      links,
      hasMore,
      total,
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new link
exports.createLink = async (req, res) => {
  try {
    const { url, requiresVpn } = req.body;
    const link = new Link({
      url,
      requiresVpn: requiresVpn || false
    });
    const savedLink = await link.save();
    res.status(201).json(savedLink);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Search link by ID
exports.searchLink = async (req, res) => {
  try {
    const linkId = parseInt(req.params.id);
    const link = await Link.findOne({ linkId });
    console.log(link)
    
    if (!link) {
      return res.status(404).json({ message: 'Link not found' });
    }
    
    res.json(link);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get new links after a specific timestamp
exports.getNewLinks = async (req, res) => {
  try {
    const { lastUpdate } = req.query;
    const query = lastUpdate 
      ? { createdAt: { $gt: new Date(lastUpdate) } }
      : {};

    const newLinks = await Link.find(query)
      .sort({ createdAt: -1 })
      .limit(10);

    res.json(newLinks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
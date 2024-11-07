// const express = require('express');
// const { createLink, getLinks } = require('../controllers/linkControllers');

// const router = express.Router();

// router.post('/links', createLink);
// router.get('/links', getLinks);

// module.exports = router;



// const express = require('express');
// const router = express.Router();
// const { getLinks, createLink } = require('../controllers/linkControllers');


// router.get('/links', getLinks);


// router.post('/links', createLink);

// module.exports = router;





// const express = require('express');
// const router = express.Router();
// const { getLinks, createLink, searchLink, filterLinks } = require('../controllers/linkControllers');

// router.get('/links', getLinks);
// router.post('/links', createLink);
// router.get('/links/search/:id', searchLink);
// router.get('/links/filter', filterLinks);

// module.exports = router;
const express = require('express');
const router = express.Router();
const { getLinks, createLink, searchLink, getNewLinks } = require('../controllers/linkControllers');

// Get all links (paginated)
router.get('/links', getLinks);

// Create a new link
router.post('/links', createLink);

// Search for a link by ID
router.get('/links/search/:id', searchLink);

// Get new links after a specific timestamp
router.get('/links/new', getNewLinks);

module.exports = router;
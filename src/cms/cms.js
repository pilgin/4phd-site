import CMS from 'netlify-cms-app'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import EventPreview from './preview-templates/EventPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('events', EventPreview)

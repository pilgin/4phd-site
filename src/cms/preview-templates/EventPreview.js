import React from 'react'
import PropTypes from 'prop-types'
import { EventTemplate } from '../../templates/events'

const EventPreview = ({ entry, widgetFor }) => (
  <EventTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

EventPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EventPreview

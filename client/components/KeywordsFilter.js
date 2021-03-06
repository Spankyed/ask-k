import PropTypes from 'prop-types';
import FilterContainer from '../FilterBase/FilterContainer';

/**
 * KeywordsFilter - A container component for Keyword objects.
 * This object appears on the web page and allows the user to
 * filter matches based on a 'keyword' value. It's core functionality
 * comes from its parents class - the FilterContainer.
 */
class KeywordsFilter extends FilterContainer {
  constructor(...props) {
    super(...props);

    this.state = {
      keywords: this.props.keywords,
      selectedKeywords: this.props.selectedKeywords
    };
  }

  /**
   * getSelectedCollection - Override parent class to return collection 
   * of selected keyword items.
   */
  getSelectedCollection() {
    const { selectedKeywords } = this.state;
    return selectedKeywords;
  }

  /**
   * getCollection - Override parent class to return collection 
   * of all keyword items.
   */
  getCollection() {
    const { keywords } = this.state;
    return keywords;
  }

  /**
   * getContainerTitle - Override parent class to return title of 
   * the filter container. 
   */
  getContainerTitle() {
    return 'Top Keywords';
  }
  
  // Important - this is needed to ensure changes to main properties
  // are propagated down to our component. In this case, some other
  // search or filter event has occured which has changed the list of 
  // keywords, or which keywords are selected.
  static getDerivedStateFromProps(props, state) {
    if (props.keywords !== state.keywords ||
        props.selectedKeywords !== state.selectedKeywords) {
      return {
        keywords: props.keywords,
        selectedKeywords: props.selectedKeywords
      };
    }
    // no change in state
    return null;
  }

}

// type check to ensure we are called correctly
KeywordsFilter.propTypes = {
  keywords: PropTypes.array,
  selectedKeywords: PropTypes.object,
};

// export so we are visible to parent
module.exports = KeywordsFilter;

import React from 'react';
import HeaderDropdownContainer from './header_dropdown_container';
import { Redirect } from 'react-router-dom';



class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  
  // componentWillMount() {
  //   // console.log('h');
  //   // return(

      
  //   // );
  // }

  toggleDropdown() {
    var classList = document.getElementById('header-dropdown').className.split(/\s+/);
   
    if(classList.includes('hidden')) {
      $('.header-dropdown').removeClass('hidden');
      this.setState({
        dropdownOpen: true
      });
    } else {
      $('.header-dropdown').addClass('hidden');
      this.setState({
        dropdownOpen: false
      });
    }
  }

  render() {
    const teamId = this.props.match.params.teamId;
    const currentTeam = this.props.teams[teamId];
    if(currentTeam) {
      const defaultChannel = currentTeam.channels[0];

      return(
        <div>
          <Redirect to={`/teams/${teamId}/${defaultChannel}`} />
          <div onClick={this.toggleDropdown} className="team-header">
            <h2>{currentTeam.name}</h2> 
            {
              this.state.dropdownOpen ?
                <i className="fa fa-times" aria-hidden="true"></i> :
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
            }
          </div>
          <HeaderDropdownContainer toggleDropdown={this.toggleDropdown} teamId={teamId}/>
        </div>
      );
    } else {
      return(
        <div className="team-header"></div>
      );
    }
  }
}

export default Header;
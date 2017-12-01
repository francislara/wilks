import React from 'react';
import HeaderDropdownContainer from './header_dropdown_container';
import { Redirect } from 'react-router-dom';
import enhanceWithClickOutside from 'react-click-outside';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    // this.removeDropdown = this.removeDropdown.bind(this);
  }
  
  toggleDropdown() {
    // var classList = document.getElementById('header-dropdown').className.split(/\s+/);
    // if(classList.includes('reallyhidden'))
    // {
    //   $('.header-dropdown').removeClass('reallyhidden');

    // } else {
      
      if(this.state.dropdownOpen) {
        console.log('goodbye');
        $('.header-dropdown').addClass('hidden');
        this.setState({
          dropdownOpen: false
        });
      } else {
        console.log('hello');
        $('.header-dropdown').removeClass('hidden');
        this.setState({
          dropdownOpen: true
        });
      }
    // }
  }

    handleClickOutside() {
      if(this.state.dropdownOpen) {
        this.toggleDropdown();

      }
    }

  // removeDropdown() {
  //   if(this.state.dropdownOpen) {

  //   } else {
  //     $('.header-dropdown').addClass('hidden');
  //     this.setState({
  //       dropdownOpen: false
  //     });

  //   }
  // }
  
  render() {
    const teamId = this.props.match.params.teamId;
    const currentTeam = this.props.teams[teamId];
    if(currentTeam) {
      if (this.props.team_keys) {
        this.props.team_keys.forEach(key => {
          document.getElementById(`blocker-${key}`).classList.add('hidden');
        });
      }
      document.getElementById(`blocker-${teamId}`).classList.remove('hidden');

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
          <HeaderDropdownContainer 
            toggleDropdown={this.toggleDropdown} 
            teamId={teamId}
            // removeDropdown={this.removeDropdown}
            />
        </div>
      );
    } else {
      if (this.props.team_keys) {
        this.props.team_keys.forEach(key => {
          if (document.getElementById(`blocker-${key}`)) {
            document.getElementById(`blocker-${key}`).classList.add('hidden');
          }
        });
      }
      return(
        <div className="team-header"></div>
      );
    }
  }
}

export default enhanceWithClickOutside(Header);
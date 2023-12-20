import React from 'react'
import LinkedinBadge from '/src/assets/images/icon-linkedin.svg'
import GithubBadge from '/src/assets/images/icon-github.svg'
import TwitterBadge from '/src/assets/images/icon-twitter.svg'



export default function Navbar() {


    
  return (
    <div className='navbar'>
        <div className='logo'>
            <a href="">joeyrocha</a>
        </div>
        <div className='nav-items'>
            <a href=""><img  src={LinkedinBadge} alt="linkedin icon" /></a>
            <a href=""><img src={GithubBadge} alt="github-badge" /></a>
            <a href=""><img src={TwitterBadge} alt="twitter-badge" /></a>
        </div>
    </div>
  )
}

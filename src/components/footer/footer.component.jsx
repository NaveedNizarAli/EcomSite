import React from 'react';
import './footer.styles.css';

const Footer = () => (
<div class="page-footer font-small blue pt-4">

  <div class="container-fluid text-center text-md-left">

    <div class="row">

      <div class="col-md-4 mb-md-0 mb-4">

        <h5 class="text-uppercase mb-4">Footer Content</h5>
        <p>footer content.</p>

      </div>

      
      <div class="col-md-4 mb-md-0 mb-4">
            <h4 class="margin text-uppercase mb-4"> Around the Web</h4>
						<a class="btn btn-outline-light btn-social mx-1" href="#"><i class="fab fa-fw fa-facebook-f"></i></a><a class="btn btn-outline-light btn-social mx-1" href="#"><i class="fab fa-fw fa-twitter"></i></a><a class="btn btn-outline-light btn-social mx-1" href="#"><i class="fab fa-fw fa-linkedin-in"></i></a><a class="btn btn-outline-light btn-social mx-1" href="#"><i class="fab fa-fw fa-dribbble"></i></a>
      </div>

      <div class="col-md-4 mb-md-0 mb-4">

        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
        </ul>

      </div>

    </div>

  </div>

  <div class="footer-copyright text-center py-3">© 2020 Copyright: E-Com-Site.com
    
  </div>

</div>

)

export default Footer;
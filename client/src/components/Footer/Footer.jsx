import { SocialFooter, SocialIcons, Copyright } from "./Footer.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
  return (
    <SocialFooter>
      <SocialIcons>
        <a href="https://github.com/eaeidsath/">
          <FontAwesomeIcon icon={faGithub} /> Evelyn
        </a>
        <a href="https://github.com/kerilsen/">
          <FontAwesomeIcon icon={faGithub} /> Keri
        </a>
        <a href="https://github.com/benitaisaac/">
          <FontAwesomeIcon icon={faGithub} /> Benita
        </a>
      </SocialIcons>
      <Copyright>
        {" "}
        © 2024 this.team. All rights reserved.
      </Copyright>
    </SocialFooter>
  );
}
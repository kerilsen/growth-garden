import { Container } from "./Messaging.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

export function Messaging() {
  return (
    <>
      <Container>
        <p>Chat <FontAwesomeIcon icon={faCommentDots} /></p>
      </Container>
    </>
  );
}

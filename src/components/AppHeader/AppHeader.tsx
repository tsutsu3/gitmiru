import React from "react";
import { Header, Octicon, Button } from "@primer/react";
import { MarkGithubIcon } from "@primer/octicons-react";

const AppHeader: React.FC = () => {
  return (
    <Header
      sx={{
        backgroundColor: "canvas.subtle",
        borderBottom: "1px solid",
        borderColor: "border.default",
      }}
    >
      <Header.Item full>
        <Header.Link
          href="/"
          sx={{
            fontSize: 2,
          }}
        >
          <Octicon
            icon={MarkGithubIcon}
            size={32}
            color="black"
            sx={{
              mr: 2,
            }}
          />
        </Header.Link>
        <Header.Item>
          <Button
            as="a"
            href="/"
            size="small"
            variant="invisible"
            sx={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            Dashboard
          </Button>
        </Header.Item>
      </Header.Item>
    </Header>
  );
};

export default AppHeader;

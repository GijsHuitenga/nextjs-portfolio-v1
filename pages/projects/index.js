
import { Fragment } from "react";

import { getAllProjects } from "@/dummy-data";
import ProjectsList from "@/components/projects/projects-list";
import Container from "@/components/layout/container";

export default function AllProjectsPage() {

  const allProjects = getAllProjects();

  return (
    <Fragment>
      <Container>
        <ProjectsList items={allProjects} />
      </Container>
    </Fragment>
  );
}

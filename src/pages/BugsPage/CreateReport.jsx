import { Container, Flex } from "@chakra-ui/react";
import Navbar from "../../components/Navbar/Navbar";
import ReportForm from "../../components/BugReport/ReportForm";

const CreateReport = () => {
  return (
    <>
      <Flex>
        <Navbar />
        <Container maxW={"container.lg"}>
          <Flex gap={20}>
            <ReportForm />
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default CreateReport;
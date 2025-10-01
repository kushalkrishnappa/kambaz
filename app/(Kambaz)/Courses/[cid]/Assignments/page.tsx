import Link from "next/link";
import {
  Button,
  InputGroup,
  FormControl,
  ListGroup,
  ListGroupItem,
  Badge,
} from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { IoEllipsisVertical, IoSearch } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { RxFileText } from "react-icons/rx";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <InputGroup className="border rounded" style={{ width: "300px" }}>
          {/* <InputGroup.Text className="bg-white border-0">
            <IoSearch />
          </InputGroup.Text> */}
          <FormControl
            placeholder="Search..."
            id="wd-search-assignment"
            className="border-0"
          />
        </InputGroup>
        <div>
          <Button variant="secondary" className="me-2" id="wd-add-assignment-group">
            <BsPlus className="fs-4" /> Group
          </Button>
          <Button variant="danger" id="wd-add-assignment">
            <BsPlus className="fs-4" /> Assignment
          </Button>
        </div>
      </div>

      <ListGroup className="rounded-0">
        <ListGroupItem className="p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <strong>ASSIGNMENTS</strong>
            </div>
            <div className="d-flex align-items-center">
              <Badge bg="light" text="dark" className="me-2 rounded-pill px-3 py-2">
                40% of Total
              </Badge>
              <BsPlus className="fs-4" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>

          <ListGroup className="rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex align-items-start">
                  <BsGripVertical className="me-2 fs-3" />
                  <RxFileText className="me-3 fs-4 text-success" />
                  <div>
                    <Link
                      href="/Courses/1234/Assignments/123"
                      className="wd-assignment-link text-dark fw-bold text-decoration-none"
                    >
                      A1
                    </Link>
                    <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      <strong>Not available until</strong> May 6 at 12:00am |{" "}
                      <strong>Due</strong> May 13 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <FaCheckCircle className="text-success me-2" />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-1">
              <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex align-items-start">
                  <BsGripVertical className="me-2 fs-3" />
                  <RxFileText className="me-3 fs-4 text-success" />
                  <div>
                    <Link
                      href="/Courses/1234/Assignments/234"
                      className="wd-assignment-link text-dark fw-bold text-decoration-none"
                    >
                      A2
                    </Link>
                    <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      <strong>Not available until</strong> May 13 at 12:00am |{" "}
                      <strong>Due</strong> May 20 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <FaCheckCircle className="text-success me-2" />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </ListGroupItem>

            <ListGroupItem className="wd-lesson p-3 ps-1">
              <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex align-items-start">
                  <BsGripVertical className="me-2 fs-3" />
                  <RxFileText className="me-3 fs-4 text-success" />
                  <div>
                    <Link
                      href="/Courses/1234/Assignments/345"
                      className="wd-assignment-link text-dark fw-bold text-decoration-none"
                    >
                      A3
                    </Link>
                    <div className="text-muted" style={{ fontSize: "0.85rem" }}>
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      <strong>Not available until</strong> May 20 at 12:00am |{" "}
                      <strong>Due</strong> May 27 at 11:59pm | 100 pts
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <FaCheckCircle className="text-success me-2" />
                  <IoEllipsisVertical className="fs-4" />
                </div>
              </div>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
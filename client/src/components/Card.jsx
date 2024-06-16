import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FcClock } from "react-icons/fc";
import { FaRupiahSign } from "react-icons/fa6";
import { IoCalendarNumberSharp } from "react-icons/io5";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";

const Card = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
  return (
    <section className="card">
      <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
        <img src={data.companyLogo} alt="" className="w-20"></img>
        <div>
          <h4 className="text-primary mb-1">{data.companyName}</h4>
          <h3 className="text-primary text-lg font-semibold mb-2">
            {data.jobTitle}
          </h3>
          <div className="text-primary/70 text-base flex flex-wrap gap-2 mb-2">
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt /> {data.jobLocation}
            </span>
            <span className="flex items-center gap-2">
              <FcClock /> {data.employmentType}
            </span>
            <span className="flex items-center gap-2">
              <FaRupiahSign /> {data.minPrice} - {data.maxPrice}
            </span>
            <span className="flex items-center gap-2">
              <IoCalendarNumberSharp /> {data.postingDate}
            </span>
          </div>
          <p className="text-base text-primary/70">{data.description}</p>
          <Button
            colorScheme="blue"
            variant="link"
            marginTop={2}
            onClick={onOpen}
          >
            More Information
          </Button>
          <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px">
                Responsibility
              </DrawerHeader>
              <DrawerBody>
                <ul key={data.index}>
                  {data.responsibility &&
                    data.responsibility.map((resp, index) => (
                      <li
                        key={index}
                        className="my-2 flex items-center text-pretty text-sm"
                      >
                        {Object.values(resp)[0]}
                      </li>
                    ))}
                </ul>
              </DrawerBody>
              <DrawerHeader borderBottomWidth="1px">Qualification</DrawerHeader>
              <DrawerBody>
                <ul key={data.index}>
                  {data.qualifications &&
                    data.qualifications.map((resp, index) => (
                      <li
                        key={index}
                        className="my-2 flex items-center text-pretty text-sm"
                      >
                        {Object.values(resp)[0]}
                      </li>
                    ))}
                </ul>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </Link>
    </section>
  );
};

export default Card;

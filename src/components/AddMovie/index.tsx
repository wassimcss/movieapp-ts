import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
// import { setSyntheticTrailingComments } from "typescript";
import StarRating from "../StarRating";
interface IProps {
  handleSubmit: (movie: any) => void;
}
const AddMovie = ({ handleSubmit }: IProps) => {
  const [name, setName] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [date, setDate] = useState<any>();
  const [rate, setRate] = useState(1);

  const handleRate = (r: any) => {
    setRate(r);
  };

  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = (e: any) => {
    e.preventDefault();
    console.log("s");
    handleSubmit({ name, url, date, rating:rate, id: Math.random() });

    handleClose();
    
  };
  const clearMoadal = () => {
    setName("");
    setDate(Date.now());
    setUrl("");
    setRate(1)
  }

  useEffect(() => {
    clearMoadal()
  }, [show])
  
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <form>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Name :{" "}
            <input
              type="text"
              className="form-control"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              value={name}
            />
            date :{" "}
            <input
              type="date"
              className="form-control"
              onChange={(e: React.ChangeEvent<HTMLInputElement> | any) =>
                setDate(e.target.value)
              }
              value={date}
            />
            Image :{" "}
            <input
              type="text"
              className="form-control"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUrl(e.target.value)
              }
              value={url}
            />
            Rate : <StarRating rating={rate}  handleSearchRate={handleRate} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleAdd}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    </div>
  );
};

export default AddMovie;

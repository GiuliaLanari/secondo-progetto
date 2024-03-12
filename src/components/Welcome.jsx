import { Alert } from "react-bootstrap";

const Welcome = function () {
  return (
    <>
      {["info"].map((variant) => (
        <Alert key={variant} variant={variant}>
          Sconti super convenienti fino al primo Giugno 2024!
        </Alert>
      ))}
      <h2 className="text-center my-4">Shop Onlime</h2>
    </>
  );
};

export default Welcome;

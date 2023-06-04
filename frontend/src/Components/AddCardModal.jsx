import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import {
  CircularProgress,
  FormControl,
  TextField,
  useTheme,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
const AddCardModal = ({ postData }) => {
  const [loading, setLoading] = React.useState(false);
  const theme = useTheme();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      console.log(data);
      await postData("http://20.198.105.30:8000/addcard/", data);
      handleClose();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-7">
      <Button className="w-full" variant="contained" onClick={handleOpen}>
        Add Card
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography mb={2} id="modal-modal-title" variant="h6" component="h2">
            Add New Card
          </Typography>
          <Box>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-full gap-2"
            >
              <FormControl>
                <TextField
                  fullWidth
                  error={errors.cardLabel}
                  id="label"
                  label="Card Label"
                  defaultValue=""
                  helperText="Enter a valid input"
                  {...register("cardLabel", {
                    required: true,
                  })}
                  InputLabelProps={{
                    style: { color: theme.palette.secondary.main }, // Change the color of the label
                  }}
                />
              </FormControl>
              <FormControl>
                <TextField
                  error={errors.bank}
                  id="bank"
                  label="Bank Name"
                  defaultValue=""
                  helperText="Enter a valid input"
                  {...register("bank", {
                    required: true,
                  })}
                  InputLabelProps={{
                    style: { color: theme.palette.secondary.main }, // Change the color of the label
                  }}
                />
              </FormControl>
              <FormControl>
                <TextField
                  type="number"
                  error={errors.cardNumber}
                  id="cardNumber"
                  label="Card Number"
                  defaultValue=""
                  helperText="Enter a valid input"
                  {...register("cardNumber", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  InputLabelProps={{
                    style: { color: theme.palette.secondary.main }, // Change the color of the label
                  }}
                />
              </FormControl>
              <FormControl>
                <TextField
                  type="number"
                  error={errors.cap}
                  id="capcardNumber"
                  label="Cap"
                  defaultValue=""
                  helperText="Enter a valid input"
                  {...register("cap", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  InputLabelProps={{
                    style: { color: theme.palette.secondary.main }, // Change the color of the label
                  }}
                />
              </FormControl>
              <Button type="submit" variant="contained">
                {loading ? (
                  <CircularProgress sx={{ color: "white" }} size={24} />
                ) : (
                  "Create"
                )}
              </Button>
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddCardModal;

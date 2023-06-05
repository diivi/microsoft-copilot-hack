/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import { mutate } from "swr";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Controller, useForm } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  useTheme,
  Chip,
  OutlinedInput,
  CircularProgress,
  Fab,
} from "@mui/material";

const AddTransactionModal = ({ postData, cardsData }) => {
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

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const options = [
    "Food",
    "Shopping",
    "Travel",
    "Bills",
    "Entertainment",
    "Investments",
    "EMIs",

    "Misc",
  ];

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [selectedSource, setSelectedSource] = React.useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    control,
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      await postData("http://20.198.105.30:8000/addtransaction/", data);
      mutate("http://20.198.105.30:8000/getusercards/");
      mutate("http://20.198.105.30:8000/getusertags/");
      handleClose();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Box className="hidden lg:block ">
        <Button
          sx={{ borderRadius: 2 }}
          variant="contained"
          color="secondary"
          onClick={handleOpen}
        >
          Add Transaction
        </Button>
      </Box>
      <Box className="block lg:hidden">
        <Fab onClick={handleOpen} size="small" color="primary" aria-label="add">
          +
        </Fab>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography mb={2} id="modal-modal-title" variant="h6" component="h2">
            Create Transaction
          </Typography>
          <Box>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col w-full gap-3"
            >
              <FormControl>
                <TextField
                  type="number"
                  error={errors.amount}
                  id="amount"
                  label="Amount"
                  defaultValue=""
                  helperText="Enter a valid input"
                  {...register("amount", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  InputLabelProps={{
                    style: { color: theme.palette.secondary.main }, // Change the color of the label
                  }}
                />
                <FormControl>
                  <TextField
                    error={errors.Label}
                    id="label"
                    label="Label"
                    defaultValue=""
                    helperText="Enter a valid input"
                    {...register("label", {
                      required: true,
                    })}
                    InputLabelProps={{
                      style: { color: theme.palette.secondary.main }, // Change the color of the label
                    }}
                  />
                </FormControl>

                <FormControl>
                  <InputLabel id="chip-label">Tags</InputLabel>
                  <Controller
                    control={control}
                    name="tags"
                    render={({ field }) => (
                      <Select
                        {...field}
                        sx={{ backgroundColor: theme.palette.primary.main }}
                        labelId="chip-label"
                        helperText="Enter a valid input"
                        id="chip-select"
                        multiple
                        label="Tags"
                        input={<OutlinedInput id="select-chip" />}
                        renderValue={(selected) => (
                          <Box
                            sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                          >
                            {selected.map((value) => (
                              <Chip key={value} label={value} />
                            ))}
                          </Box>
                        )}
                        MenuProps={MenuProps}
                      >
                        {options.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                    rules={{ required: true }}
                    defaultValue={[]}
                  />
                </FormControl>
              </FormControl>
              <FormControl>
                <InputLabel id="source-label">Source</InputLabel>
                <Select
                  sx={{ backgroundColor: theme.palette.primary.main }}
                  labelId="source-label"
                  error={errors.source}
                  id="demo-simple-select"
                  label="Source"
                  onChange={(e) => {
                    setSelectedSource(e.target.value);
                    console.log(e.target.value);
                  }}
                  {...register("source", {
                    required: true,
                  })}
                  InputLabelProps={{
                    style: { color: theme.palette.primary.main },
                  }}
                  control={control} // Provide the control object from react-hook-form
                >
                  <MenuItem value={"cash"}>Cash</MenuItem>
                  <MenuItem value={"card"}>Card</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  sx={{ backgroundColor: theme.palette.primary.main }}
                  labelId="demo-simple-select-label"
                  error={errors.type}
                  id="demo-simple-select"
                  label="Type"
                  {...register("type", {
                    required: true,
                  })}
                  InputLabelProps={{
                    style: { color: theme.palette.secondary.main }, // Change the color of the label
                  }}
                  control={control} // Provide the control object from react-hook-form
                >
                  <MenuItem value={"incoming"}>Incoming</MenuItem>
                  <MenuItem value={"outgoing"}>outgoing</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="card-label">Card</InputLabel>
                <Select
                  sx={{ backgroundColor: theme.palette.primary.main }}
                  labelId="card-label"
                  error={errors.card}
                  id="card"
                  label="Card"
                  {...register("cardId", {
                    required: selectedSource === "card",
                  })}
                  InputLabelProps={{
                    style: { color: theme.palette.secondary.main }, // Change the color of the label
                  }}
                  control={control} // Provide the control object from react-hook-form
                >
                  {cardsData.map((card) => (
                    <MenuItem key={card.id} value={card.id}>
                      {card.label}
                    </MenuItem>
                  ))}
                </Select>
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

export default AddTransactionModal;

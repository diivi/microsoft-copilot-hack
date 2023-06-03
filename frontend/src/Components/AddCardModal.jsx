import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import { FormControl, TextField } from "@mui/material";

const AddCardModal = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
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

  const onSubmit = (data) => {
    console.log(data.imageName);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add Card</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Card
          </Typography>
          <Box className="flex flex-col items-start">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <TextField
                  required
                  error={errors.cardLabel}
                  id="outlined-required"
                  label="Card Label"
                  defaultValue=""
                  helperText="Enter a valid input"
                  {...register("cardLabel", {
                    required: true,
                  })}
                />
              </FormControl>
              <FormControl>
                <TextField
                  required
                  error={errors.bank}
                  id="outlined-required"
                  label="Bank Name"
                  defaultValue="Bank Name"
                  helperText="Enter a valid input"
                  {...register("cardLabel", {
                    required: true,
                  })}
                />
              </FormControl>
              <FormControl>
                <TextField
                  required
                  type="number"
                  error={errors.cap}
                  id="cap-input"
                  label="Card Cap"
                  defaultValue="0"
                  helperText="Enter a valid input"
                  {...register("cap", {
                    required: true,
                  })}
                />
              </FormControl>
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddCardModal;

// import {
//   Button,
//   Flex,
//   FormControl,
//   FormLabel,
//   Input,
//   Modal,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
//   ModalOverlay,
//   Text,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { useState } from "react";
// import { mutate } from "swr";
// import { uploadImageRequest } from "../utils/axiosUtils";
// import { useAuth } from "../context/userContext";
// import UploadProgressElement from "./ui/uploadProgressElement";

// type FormValues = {
//   imageName: string;
// };

// const AddImageModal = () => {
//   const { jwtToken } = useAuth();
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [uploadProgress, setUploadProgress] = useState<number>(0);
//   const [fileUploadError, setFileUploadError] = useState<string | null>();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormValues>();

//   const onSubmit: SubmitHandler<FormValues> = async (data) => {
//     console.log(data.imageName);

//     if (selectedFile) {
//       const file = selectedFile;
//       const formData = new FormData();
//       formData.append("image", file);
//       formData.append("fileName", data.imageName);
//       console.log(formData);

//       await uploadImageRequest(formData, "POST", jwtToken, (percentage) => {
//         setUploadProgress(percentage);
//       });
//       mutate("http://localhost:3700/get-my-images");
//       onClose();
//       setUploadProgress(0);
//     } else {
//       setFileUploadError("Upload a valid File");
//     }
//   };

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files && event.target.files[0];
//     setSelectedFile(file || null);
//   };

//   return (
//     <>
//       <Button onClick={onOpen}>+ Add New Image</Button>

//       <Modal isOpen={isOpen} onClose={onClose} isCentered>
//         <ModalOverlay />
//         <ModalContent gap={5}>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <ModalHeader>Add New Image</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody pb={6}>
//               <Flex gap={4} direction="column">
//                 <FormControl>
//                   <FormLabel>Image Name</FormLabel>
//                   <Input
//                     placeholder="Image Name"
//                     type="text"
//                     {...register("imageName", {
//                       required: true,
//                     })}
//                   />
//                   {errors.imageName && (
//                     <span className="text-red-300">Enter a valid input</span>
//                   )}
//                   <Input type="file" onChange={handleFileChange} mt={4} />
//                 </FormControl>
//                 <Flex justifyContent={"space-around"} alignItems={"center"}>
//                   {uploadProgress ? (
//                     <>
//                       <Text fontWeight={"bold"}>Progress: </Text>
//                       <UploadProgressElement progress={uploadProgress} />
//                     </>
//                   ) : null}
//                 </Flex>
//                 {/* <Text>{fileUploadError ?? ""}</Text> */}
//               </Flex>
//             </ModalBody>

//             <ModalFooter>
//               <Button type="submit" colorScheme="blue" disabled={!selectedFile}>
//                 Upload
//               </Button>
//               <Button onClick={onClose}>Cancel</Button>
//             </ModalFooter>
//           </form>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default AddImageModal;

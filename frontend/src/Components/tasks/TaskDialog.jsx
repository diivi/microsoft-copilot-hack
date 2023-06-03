import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

import { useEffect, useState } from 'react';

import axios from 'axios';
import dayjs from 'dayjs';

export default function TaskDialog(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState(dayjs());

    useEffect(() => {
        if (props.isEdit) {
            setTitle(props.title);
            setDescription(props.description);
            setDueDate(dayjs(props.dueDate));
        } else {
            setTitle("");
            setDescription("");
            setDueDate(dayjs());
        }
    }, [props.isEdit])

    const handleEdit = () => {
        axios.put(`https://task-mgmt.azurewebsites.net/Task/${props.id}?owner_id=abdc`, {
            id: props.id,
            title: title,
            description: description,
            dueDate: dueDate,
            isCompleted: props.completed,
            owner_id: "abdc"
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })

        props.handleClose();
    }

    const handleSubmit = () => {
        axios.post(`https://task-mgmt.azurewebsites.net/Task/?owner_id=abdc`, {
            id: 0,
            title: title,
            description: description,
            dueDate: dueDate,
            isCompleted: false,
            owner_id: "abdc"
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })

        props.handleClose();
    }

    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle fontFamily={"Roboto Mono"}>{props.isEdit ? "Edit Task:" : "Enter Task Details:"}</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    autoFocus
                    id="title"
                    label="Title"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    margin="dense"
                    id="taskDescription"
                    label="Task Description"
                    multiline
                    rows={4}
                    fullWidth
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateTimePicker']}>
                        <DateTimePicker
                            label="Due Date"
                            inputVariant="outlined"
                            value={dueDate}
                            fullWidth
                            onChange={(date) => setDueDate(date)}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button onClick={props.isEdit ? handleEdit : handleSubmit}>{props.isEdit ? "Change" : "Add Task"}</Button>
            </DialogActions>
        </Dialog>
    )
}
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

import dayjs from 'dayjs';

import useData from '../../hooks/swrHook';

export default function TaskDialog(props) {
    const { postData, putData } = useData(
        "https://task-mgmt.azurewebsites.net/Task", {
        owner_id: "abdc"
    }
    );

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState(dayjs());

    useEffect(() => {
        if (props.isEdit) {
            setTitle(props.title);
            setDescription(props.description);
            setDueDate(dayjs(props.dueDate));
        }
    }, [props.isEdit])

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
                <Button onClick={
                    props.isEdit ?
                        () => {
                            putData(
                                `https://task-mgmt.azurewebsites.net/Task/${props.id}`,
                                {
                                    id: props.id,
                                    title: title,
                                    description: description,
                                    dueDate: dueDate,
                                    dateCreated: props.dateCreated,
                                    isCompleted: props.completed,
                                    owner_id: "abdc"
                                }
                            )

                            props.handleClose()
                        }
                        :
                        () => {
                            postData(
                                `https://task-mgmt.azurewebsites.net/Task`,
                                {
                                    id: 0,
                                    title: title,
                                    description: description,
                                    dueDate: dueDate,
                                    dateCreated: dayjs(),
                                    isCompleted: false,
                                    owner_id: "abdc"
                                }
                            )

                            props.handleClose()
                            setTitle("");
                            setDescription("");
                            setDueDate(dayjs());

                        }}>{props.isEdit ? "Change" : "Add Task"}</Button>
            </DialogActions>
        </Dialog >
    )
}
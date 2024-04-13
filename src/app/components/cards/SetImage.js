'use client'
import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

function SetImage(props) {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenLevel = () => setModalOpen(true);

    const handleClose = () => setModalOpen(false);

    return (
        <div onClick={handleOpenLevel} className={`flex justify-center items-center ${props.bgColor} hover:cursor-pointer hover:shadow-[rgb(0,255,53)_5px_5px_80px] group transition-all duration-[0.5s] ease-[ease-in-out] relative border-[0.5em] p-[2px] gap-5 w-[20em] h-[13em] md:w-[25em] md:h-[15em] lg:w-[28em] lg:h-[18em] ${props.shadow} m-1 rounded-[20px] border-solid ${props.color}`}>
            <Image height={1000} width={1000} alt="modal-bg" className={`group-hover:translate-y-[-30px] group-hover:scale-[1.1]  transition-all duration-[0.5s] ease-[ease-in-out] w-[30em] h-full object-contain`} src={props.src} />
            <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {props.children}
                </Box>
            </Modal>
        </div>
    );
}

export default SetImage;

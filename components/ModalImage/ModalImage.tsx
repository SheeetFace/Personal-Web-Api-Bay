import {Modal, ModalContent, ModalBody, ModalFooter, Button} from "@nextui-org/react";

interface ModalImageProps{
    src:string
    isOpen:boolean
    onClose: () => void
}

const ModalImage:React.FC<ModalImageProps> = ({src,isOpen,onClose}) => {

    return (
        <Modal size='3xl' backdrop='blur' isOpen={isOpen} onClose={onClose}>
            <ModalContent>
            {(onClose) => (
                <>
                <ModalBody className="flex items-center justify-center mt-8">
                <img
                    src={src}
                    width={300}
                    height={300}
                    alt="Image Preview"
                    className="rounded-lg object-cover w-10/12"
                />
                </ModalBody>
                <ModalFooter className="p-1">
                    <Button color="danger" variant="light" onPress={onClose}>
                        Close
                    </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>
    )
}

export default ModalImage;
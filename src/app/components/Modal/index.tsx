import { Album } from '../../types/album'
import { AlbumItem } from '../Album'

// It can be like Generic Component
type ModalProps = {
	data: Album[]
	isOpen: boolean
	closeModal: () => void
}

export const Modal = (props: ModalProps) => {
	const { data, isOpen, closeModal } = props

	return (
		<div>
			{isOpen && (
				<div className='modal'>
					<div className='modal-content'>
						<span onClick={closeModal} className='close'>
							&times;
						</span>
						<div>
							<h2 className='text'>Альбоми</h2>
							{!data ? (
								<div>Loading...</div>
							) : (
								data?.map(album => <AlbumItem album={album} />)
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

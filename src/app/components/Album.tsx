import { Album } from '../types/album'

type AlbomProps = {
	album: Album;
}

export const AlbumItem = (props: AlbomProps) => {
	const { album } = props;

	return (
		<>
			<div>
				<p className='text'>Title: {album.title}</p>
			</div>
		</>
	)
}

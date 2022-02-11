import PlaceCardItem from './PlaceCardItem';

import styles from './PlaceCardContainer.module.scss';

const PlaceCardContainer = ({ CARDS_DATA }) => {
	return (
		<div className={styles.PlaceCardContiner}>
			{CARDS_DATA.map((card, index) => {
				return (
					<PlaceCardItem key={Math.random() * 100 * index} card_data={card} />
				);
			})}
		</div>
	);
};

export default PlaceCardContainer;

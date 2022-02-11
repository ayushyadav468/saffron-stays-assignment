import Head from 'next/head';

import PlaceCardContainer from '../components/PlaceCard/PlaceCardContainer';

const CARDS_DATA = [
	{
		imagesURL: ['/img_1.png', '/img_2.png', '/img_3.png'],
		isSaved: false,
		fullName: 'Sea La Vie',
		destination: 'Alibaug, Maharashtra',
		otherDetailRegardingDestination: '',
		description: ['Entire Villa', '3 Bedroom', '6 Guests'],
		feature: ['Pet-friendly', 'Free Cancellation'],
		stars: 4.5,
		noOfReviews: 105,
		originalPrice: 40499,
		discountedPrice: 148680,
		currency: 'INR',
		currencySymbol: '₹'
	},
	{
		imagesURL: ['/img_1.png', '/img_2.png', '/img_3.png'],
		isSaved: true,
		fullName: 'Sea La Vie',
		destination: 'Alibaug, Maharashtra',
		description: ['Entire Villa', '3 Bedroom', '6 Guests'],
		feature: ['Pet-friendly', 'Free Cancellation'],
		stars: 4.5,
		noOfReviews: 105,
		originalPrice: 40499,
		discountedPrice: 148680,
		currency: 'INR',
		currencySymbol: '₹'
	},
	{
		imagesURL: ['/img_1.png', '/img_2.png', '/img_3.png'],
		isSaved: false,
		fullName: 'Sea La Vie',
		destination: 'Alibaug, Maharashtra',
		description: ['Entire Villa', '3 Bedroom', '6 Guests'],
		feature: ['Pet-friendly'],
		stars: 4.5,
		noOfReviews: 105,
		originalPrice: 40499,
		discountedPrice: 148680,
		currency: 'INR',
		currencySymbol: '₹'
	},
	{
		imagesURL: ['/img_1.png', '/img_2.png', '/img_3.png'],
		isSaved: false,
		fullName: 'Sea La Vie',
		destination: 'Alibaug, Maharashtra',
		description: ['Entire Villa', '3 Bedroom', '6 Guests'],
		feature: ['Pet-friendly', 'Free Cancellation'],
		stars: 4.5,
		noOfReviews: 105,
		originalPrice: 40499,
		discountedPrice: 148680,
		currency: 'INR',
		currencySymbol: '₹'
	},
	{
		imagesURL: ['/img_1.png', '/img_2.png', '/img_3.png'],
		isSaved: false,
		fullName: 'Sea La Vie',
		destination: 'Alibaug, Maharashtra',
		description: ['Entire Villa', '3 Bedroom', '6 Guests'],
		feature: ['Pet-friendly', 'Free Cancellation'],
		stars: 4.5,
		noOfReviews: 105,
		originalPrice: 40499,
		discountedPrice: 148680,
		currency: 'INR',
		currencySymbol: '₹'
	},
	{
		imagesURL: ['/img_1.png', '/img_2.png', '/img_3.png'],
		isSaved: false,
		fullName: 'Sea La Vie',
		destination: 'Alibaug, Maharashtra',
		description: ['Entire Villa', '3 Bedroom', '6 Guests'],
		feature: ['Pet-friendly'],
		stars: 4.5,
		noOfReviews: 105,
		originalPrice: 40499,
		discountedPrice: 148680,
		currency: 'INR',
		currencySymbol: '₹'
	},
	{
		imagesURL: ['/img_1.png', '/img_2.png', '/img_3.png'],
		isSaved: false,
		fullName: 'Sea La Vie',
		destination: 'Alibaug, Maharashtra',
		description: ['Entire Villa', '3 Bedroom', '6 Guests'],
		feature: ['Pet-friendly', 'Free Cancellation'],
		stars: 4.5,
		noOfReviews: 105,
		originalPrice: 40499,
		discountedPrice: 148680,
		currency: 'INR',
		currencySymbol: '₹'
	},
	{
		imagesURL: ['/img_1.png', '/img_2.png', '/img_3.png'],
		isSaved: false,
		fullName: 'Sea La Vie',
		destination: 'Alibaug, Maharashtra',
		description: ['Entire Villa', '3 Bedroom', '6 Guests'],
		feature: ['Pet-friendly', 'Free Cancellation'],
		stars: 4.5,
		noOfReviews: 105,
		originalPrice: 40499,
		discountedPrice: 148680,
		currency: 'INR',
		currencySymbol: '₹'
	},
	{
		imagesURL: ['/img_1.png', '/img_2.png', '/img_3.png'],
		isSaved: false,
		fullName: 'Sea La Vie',
		destination: 'Alibaug, Maharashtra',
		description: ['Entire Villa', '3 Bedroom', '6 Guests'],
		feature: ['Pet-friendly'],
		stars: 4.5,
		noOfReviews: 105,
		originalPrice: 40499,
		discountedPrice: 148680,
		currency: 'INR',
		currencySymbol: '₹'
	},
	{
		imagesURL: ['/img_1.png', '/img_2.png', '/img_3.png'],
		isSaved: true,
		fullName: 'Sea La Vie',
		destination: 'Alibaug, Maharashtra',
		otherDetailRegardingDestination: '2 kms from beach',
		description: ['Entire Villa', '3 Bedroom', '6 Guests'],
		feature: ['Pet-friendly'],
		stars: 4.2,
		noOfReviews: 29,
		originalPrice: 40499,
		discountedPrice: 148680,
		currency: 'INR',
		currencySymbol: '₹'
	}
];

export default function Home() {
	return (
		<>
			<Head>
				<title>Assignment| SaffronStays</title>
				<meta name='description' content='Assignment for SaffronStays' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<PlaceCardContainer CARDS_DATA={CARDS_DATA} />
			</main>
		</>
	);
}

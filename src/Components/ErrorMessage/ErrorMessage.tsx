function ErrorMessage(): JSX.Element {
	return (
		<section className='error-message error-message__container'>
			OOPS! <br />
			Something went wrong...
			<br />
			<div className='error-img-wrap'>
				<img src='./404-error-page.gif' alt='404-svg-animation.svg' />
			</div>
			<button
				className='refresh-button'
				type='button'
				onClick={() => {
					window.location.reload();
				}}
			>
				Refresh
			</button>
		</section>
	);
}
export default ErrorMessage;

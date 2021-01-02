import {
	createElement,
	Component,
	useEffect,
	useContext,
	useState,
	Fragment
} from '@wordpress/element'
import { __, sprintf } from 'ct-i18n'
import { Dialog, DialogOverlay, DialogContent } from './reach/dialog'
import Overlay from './Overlay'

const useActivationAction = (extension, cb = () => {}) => {
	const [isLoading, setIsLoading] = useState(false)
	const [isDisplayed, setIsDisplayed] = useState(false)

	const is_pro = ctDashboardLocalizations.plugin_data.is_pro

	const makeAction = async () => {
		if (!is_pro && extension.config.pro) {
			setIsDisplayed(true)

			return
		}

		const body = new FormData()

		body.append('ext', extension.name)
		body.append(
			'action',
			extension.__object
				? 'blocksy_extension_deactivate'
				: 'blocksy_extension_activate'
		)

		setIsLoading(true)

		try {
			await fetch(ctDashboardLocalizations.ajax_url, {
				method: 'POST',
				body
			})

			cb()
		} catch (e) {}

		// await new Promise(r => setTimeout(() => r(), 1000))

		setIsLoading(false)
	}

	return [
		isLoading,
		makeAction,
		!is_pro && extension.config.pro ? (
			<Overlay
				items={isDisplayed}
				onDismiss={() => setIsDisplayed(false)}
				render={() => (
					<div className="ct-activation-action-modal">
						<svg viewBox="0 0 59.99 60">
							<path
								d="M14.41 43.65c0 .13.08.27.11.41a5.91 5.91 0 010 2.37c-1.78 1.14-3.2 1.19-4.34.68-2.83-1.27-3.81-6-3.81-6s.38-.08 1-.15a6.08 6.08 0 012.64.91 4.17 4.17 0 01-.22-1 6.47 6.47 0 013.2 1 8.14 8.14 0 01.35-5 12.74 12.74 0 01.65-1.62s8.51 4.32 3 9.27a5.81 5.81 0 01-2.34-.68 2 2 0 01-.24-.19zM7.17 15.93q.2.22.42.45a5.74 5.74 0 002.68-.74 5.51 5.51 0 00-.28 2.76 6.79 6.79 0 001.47.81c5 1.94 6.91-5.79 6.91-5.79a13.35 13.35 0 00-4.5-.26 5.64 5.64 0 00-2.15.72 4.42 4.42 0 00.23-.81c.51-2.62-.94-5.82-.94-5.82a13.76 13.76 0 00-2.44 1.51c-2 1.51-4 4-1.53 7a.65.65 0 00.13.17zm.93 16.56a6.7 6.7 0 00.84.76c7.28-1.28 2.36-9.46 2.36-9.46a14.28 14.28 0 00-2.18 1.69 7.39 7.39 0 00-2.13 3.35v-1.19a5.49 5.49 0 00-1.27-1.71 12.75 12.75 0 00-3.94-2.44 13.32 13.32 0 00-.39 1.37c-.49 2-.91 5.69 1.85 7a4.83 4.83 0 001.75.46 8.25 8.25 0 00.86 0 6.45 6.45 0 001.14-1.76 4.41 4.41 0 001.11 1.93zM18.79 9.27c6 1.85 8.82-7.61 8.82-7.61a17.44 17.44 0 00-6.1-.58c-2.92.35-5.71 1.92-5.33 6.76a8.42 8.42 0 002.61 1.43zM49.6 40.93a6.08 6.08 0 00-2.64.91 4.21 4.21 0 00.22-1 11.57 11.57 0 00-1.19-5.59 13.88 13.88 0 00-2.36 1.58c-1.87 1.58-3.82 4.16-1.33 7 .06.08.13.15.2.23s.29.3.46.45a5.69 5.69 0 002.65-.86 5.82 5.82 0 00-.14 2.78 6.75 6.75 0 001.34.68c5.16 1.94 6.81-6 6.81-6a13.28 13.28 0 00-4.02-.18zm-6.49-27.77a10.69 10.69 0 00-1.5.26s1.15 4.53 3.91 5.79c1.18.54 2.66.47 4.47-.81a5.88 5.88 0 00-.16-2.47 1.42 1.42 0 00-.1-.29l.23.13a6 6 0 002.45.61c5.24-5.19-3.42-9.13-3.42-9.13a13.57 13.57 0 00-.54 1.51 8.37 8.37 0 00-.17 5.12 6.62 6.62 0 00-3.29-.81 12.09 12.09 0 00-1.88.09zm15.13 10.33a13.53 13.53 0 00-2.61 1.37 7.1 7.1 0 00-2.64 2.78v1.18a6.69 6.69 0 00-1.73-2.89 13.85 13.85 0 00-2.62-2.14 13.17 13.17 0 00-.82 1.69c-.83 2-1.65 5.4 1 7a6.4 6.4 0 002.16.76 7.35 7.35 0 001-.93 4.26 4.26 0 001-1.76 6.06 6.06 0 00.76 1.3 6.25 6.25 0 00.4.5c7.43.09 4.1-8.86 4.1-8.86zM38.19 9.27c1.55.52 3.41.27 5.61-1.43.51-6.56-4.81-7.11-8.33-6.76a19.24 19.24 0 00-3.1.58S34.25 8 38.19 9.27zM41.99 54h-3v-6a2 2 0 00-2-2h-14a2 2 0 00-2 2v6h-3a2 2 0 00-2 2v3h28v-3a2 2 0 00-2-2zM25.76 21.65l-5.77.84a1 1 0 00-.81.68 1 1 0 00.26 1l4.19 4.11a1 1 0 01.28.88l-.92 5.44-.07.4a1 1 0 00.4 1 1 1 0 001.06.07l3.55-1.88 1.6-.85a1 1 0 01.94 0l2.4 1.27 2.75 1.46a1 1 0 001.05-.07 1 1 0 00.4-1l-1-5.81a1 1 0 01.28-.88l4.19-4.11a1 1 0 00.26-1 1 1 0 00-.81-.68l-5.78-.84a1 1 0 01-.75-.55l-2.57-5.3a1 1 0 00-1.8 0l-1.17 2.39-1.41 2.88a1 1 0 01-.75.55z"
								fill="#ffa800"
							/>
							<path
								d="M19.99 22.49l5.78-.84a1 1 0 00.75-.55l1.41-2.88 1.41 2.88a1 1 0 00.75.55l5.78.84a1 1 0 01.56 1.71l-4.19 4.11a1 1 0 00-.29.88l.92 5.4-2.4-1.27a1 1 0 00-.94 0l-1.6.85-1.6-.85a1 1 0 00-.93 0l-2.41 1.28.92-5.41a1 1 0 00-.28-.88l-4.2-4.11a1 1 0 01-.26-1 1 1 0 01.82-.71zm-13 8.07a4.41 4.41 0 001.14 1.93c2.67-1.61 1.85-5 1-7a7.39 7.39 0 00-2.14 3.34 3.49 3.49 0 000 1.7zm11.8-21.29c3.94-1.27 5.82-7.61 5.82-7.61a19.24 19.24 0 00-3.1-.58c-2.92.35-5.71 1.92-5.33 6.76a8.42 8.42 0 002.61 1.43zm-7.31 9.94c2.76-1.26 3.91-5.79 3.91-5.79a10.69 10.69 0 00-1.5-.26 12.35 12.35 0 00-1.9-.09 4.42 4.42 0 01-.23.81 3.48 3.48 0 00-1.46 1.75 5.51 5.51 0 00-.31 2.77 6.79 6.79 0 001.49.81zm37.4 13.28a4.41 4.41 0 001.11-1.93 3.57 3.57 0 000-1.72 7.31 7.31 0 00-2.17-3.34c-.83 2.02-1.61 5.38 1.06 6.99zM45.5 19.21a6.79 6.79 0 001.49-.81 5.51 5.51 0 00-.26-2.76 3.53 3.53 0 00-1.46-1.75 5.79 5.79 0 00-2.13-.72 10.69 10.69 0 00-1.5.26s1.1 4.57 3.86 5.78zm-7.31-9.94a8.42 8.42 0 002.61-1.43c.38-4.84-2.41-6.41-5.33-6.76a19.24 19.24 0 00-3.1.58S34.25 8 38.19 9.27zm8.8 32.57l-1.4 1.8a5.82 5.82 0 00-.14 2.78 6.75 6.75 0 001.34.68c2.83-1.27 3.81-6 3.81-6s-.38-.08-1-.15a6.08 6.08 0 00-2.61.89zm1.42-33.08a8.37 8.37 0 00-.17 5.12l1.46 1.75a1.42 1.42 0 01.1.29.65.65 0 00.13-.16c2.48-2.97.44-5.49-1.52-7zm-6.15 35.08a1.92 1.92 0 00.31-.18 3.55 3.55 0 001.42-1.79 8.1 8.1 0 00-.35-5c-1.92 1.54-3.87 4.13-1.38 6.97zm13.37-19a7.1 7.1 0 00-2.64 2.8v2.91a6.06 6.06 0 00.76 1.3c2.79-1.3 2.37-4.98 1.88-6.99zM11.41 43.65l-1.34-1.75a6.08 6.08 0 00-2.64-.91c-.6.07-1 .15-1 .15s1 4.77 3.81 6a6.75 6.75 0 001.34-.68 5.82 5.82 0 00-.14-2.78zM38.99 54h-3v-6a2 2 0 00-2-2h-11a2 2 0 00-2 2v6h-3a2 2 0 00-2 2v3h25v-3a2 2 0 00-2-2zm-25.6-17.17a8.14 8.14 0 00-.35 5 3.45 3.45 0 001.31 1.72h.05c0 .13.08.27.11.41.07-.08.14-.15.2-.23 2.5-2.73.55-5.32-1.32-6.9z"
								fill="#fedd0a"
							/>
							<path
								d="M16.18 7.84C15.8 3 18.59 1.43 21.51 1.08a14.84 14.84 0 013 0C21.6 1.44 18.82 3 19.2 7.84a8.42 8.42 0 002.59 1.43 4.81 4.81 0 01-3 0 8.42 8.42 0 01-2.61-1.43zm-7.61.92c-2 1.51-4 4-1.53 7a.65.65 0 00.13.16q.2.22.42.45a5.91 5.91 0 002.4-.61c-2.45-3-.42-5.49 1.54-7a13.57 13.57 0 00-.54-1.51 13.76 13.76 0 00-2.42 1.51zM15.99 56v3h3v-3a2 2 0 012-2h-3a2 2 0 00-2 2zm7-10a2 2 0 00-2 2v6h3v-6a2 2 0 012-2zM4.35 24.86a13.53 13.53 0 00-2.61-1.37 13.32 13.32 0 00-.39 1.37c-.49 2-.91 5.69 1.85 7a4.83 4.83 0 001.79.46 8.25 8.25 0 00.86 0 5.84 5.84 0 00.4-.5c-2.81-1.27-2.39-4.95-1.9-6.96z"
								fill="#fff"
							/>
							<path d="M59.18 23.14a1 1 0 00-1.29-.59 14.74 14.74 0 00-3.85 2.26 24.35 24.35 0 00-.45-3.4 23.39 23.39 0 00-1.21-4 1 1 0 00.71-.29 5.42 5.42 0 001.9-4.91c-.64-3.56-5.44-5.78-5.65-5.87a1 1 0 00-1.32.5 14.57 14.57 0 00-.85 2.6 26.55 26.55 0 00-2.37-2.12 6.66 6.66 0 00-2.23-5.7C38.99-1.31 32.36.61 32.08.7a1 1 0 00-.59.48 1 1 0 00-.08.76c.08.28 2.09 6.87 6.51 8.3a5.84 5.84 0 001.74.27 7.41 7.41 0 004.15-1.44 22.7 22.7 0 013.1 3 1.48 1.48 0 000 .21 13.38 13.38 0 00-5.58.15 1 1 0 00-.72 1.21c.06.22 1.39 5.34 4.79 6.59a4.42 4.42 0 001.55.28 6.3 6.3 0 003.59-1.31 1.2 1.2 0 00.26-.29 22.46 22.46 0 01.82 2.88 21.37 21.37 0 01.43 3.47 15 15 0 00-2.86-2.35 1 1 0 00-1.38.34c-.11.2-2.81 4.75-1.3 8a5.31 5.31 0 004.07 2.87c-.08.21-.15.42-.24.63a21.75 21.75 0 01-2.25 4 14.51 14.51 0 00-1.26-4 1 1 0 00-.58-.5 1 1 0 00-.76.06c-.2.1-4.9 2.53-5.38 6.11a5.19 5.19 0 001.7 4.37 22.47 22.47 0 01-2.46 1.34A3 3 0 0036.99 45h-6V34.73l4.15 2.2a2.1 2.1 0 00.94.23 2 2 0 002-2.33l-1-5.81 4.2-4.11a2 2 0 00-1.12-3.4l-5.78-.85-2.59-5.26a2 2 0 00-3.6 0l-2.58 5.26-5.77.85a2 2 0 00-1.11 3.4L22.92 29l-1 5.81a2 2 0 00.8 1.94 2 2 0 002.11.15l4.16-2.17V45h-6a3 3 0 00-2.37 1.18 21 21 0 01-2.46-1.35 5.16 5.16 0 001.7-4.36c-.48-3.58-5.18-6-5.38-6.11a1 1 0 00-.76-.06 1 1 0 00-.58.5 14.38 14.38 0 00-1.26 4 21.11 21.11 0 01-2.25-4c-.09-.21-.16-.42-.24-.64a5.26 5.26 0 004.07-2.86c1.51-3.29-1.19-7.84-1.3-8a1 1 0 00-1.38-.34 15 15 0 00-2.86 2.35 21.37 21.37 0 01.43-3.47 22.46 22.46 0 01.82-2.88 1.2 1.2 0 00.26.29 6.3 6.3 0 003.56 1.28 4.42 4.42 0 001.55-.28c3.4-1.25 4.73-6.37 4.79-6.59a1 1 0 00-.72-1.21 13.57 13.57 0 00-5.58-.15 1.48 1.48 0 000-.21 22.7 22.7 0 013.1-3 7.39 7.39 0 004.15 1.44 5.73 5.73 0 001.73-.27c4.43-1.43 6.44-8 6.52-8.3a1 1 0 00-.08-.76 1 1 0 00-.55-.5c-.28-.09-6.89-2-10.51.92a6.66 6.66 0 00-2.23 5.7 26.55 26.55 0 00-2.37 2.12 14.57 14.57 0 00-.8-2.6 1 1 0 00-1.32-.5c-.2.09-5 2.31-5.65 5.87a5.42 5.42 0 001.91 4.88 1 1 0 00.71.29 23.65 23.65 0 00-1.21 4 24.35 24.35 0 00-.44 3.43 14.74 14.74 0 00-3.9-2.26 1 1 0 00-1.29.59c-.08.21-1.89 5.18.19 8.14a5.37 5.37 0 004.71 2.08h.11a1 1 0 00.73-.36c.09-.1.16-.22.25-.33a24.67 24.67 0 001 2.89 23.67 23.67 0 002.4 4.32 14.22 14.22 0 00-4 .19 1 1 0 00-.77 1.18c0 .22 1.15 5.4 4.49 6.8a4.41 4.41 0 001.75.35 6.4 6.4 0 003.43-1.15 1 1 0 00.44-.64 6.59 6.59 0 00.11-1.08l.84.59a23 23 0 003.51 1.97V53h-2a3 3 0 00-3 3v3a1 1 0 001 1h28a1 1 0 001-1v-3a3 3 0 00-3-3h-2v-4.91a23 23 0 003.51-1.94c.29-.19.56-.41.84-.62a7 7 0 00.11 1.11 1 1 0 00.44.64 6.4 6.4 0 003.43 1.15 4.41 4.41 0 001.75-.35c3.34-1.4 4.45-6.58 4.49-6.8a1 1 0 00-.77-1.18 14.22 14.22 0 00-4-.19 23.67 23.67 0 002.4-4.32 24.67 24.67 0 001-2.89c.09.11.16.23.25.33a1 1 0 00.73.33h.11a5.37 5.37 0 004.71-2.08c2.08-2.96.27-7.93.19-8.14zM38.65 6a22.22 22.22 0 013.4 1.82 4.32 4.32 0 01-3.51.53c-2.55-.82-4.18-4.24-4.86-6 1.81-.38 5.57-.88 7.65.81a4.12 4.12 0 011.42 2.71 23.48 23.48 0 00-3.33-1.75 1 1 0 00-1.31.53A1 1 0 0038.65 6zm-20-2.8c2.08-1.71 5.84-1.2 7.65-.83-.68 1.72-2.31 5.14-4.86 6a4.32 4.32 0 01-3.51-.53A22.22 22.22 0 0121.33 6a1 1 0 00.54-1.31 1 1 0 00-1.31-.53 24 24 0 00-3.33 1.75 4.12 4.12 0 011.42-2.73zM5.92 30.41a5.66 5.66 0 01-.58.94 3.27 3.27 0 01-2.71-1.21c-1-1.37-.65-3.75-.26-5.28a8.32 8.32 0 013.62 3.05v.61a4.45 4.45 0 00-.15.9 4.12 4.12 0 00.08.99zm6-15.39c1.25-1.11 3.66-1 5.21-.83-.55 1.47-1.64 3.61-3.21 4.18a3.23 3.23 0 01-2.93-.54 3.27 3.27 0 01.89-2.83zm-4.93-2.45c.29-1.65 2.21-3.11 3.56-3.91a8.35 8.35 0 01.38 4.61 3.81 3.81 0 00-.32.24 4.52 4.52 0 00-1.05 1.37 3.53 3.53 0 01-.56.25h-.01a4.51 4.51 0 01-.95.22 3.26 3.26 0 01-1.05-2.78zm.91 17c.09-1.7 1.78-3.37 3.09-4.32.66 1.42 1.4 3.7.7 5.23a3.23 3.23 0 01-2.43 1.69 3.25 3.25 0 01-1.41-2.63zm5.78 16.29a3.26 3.26 0 01-2.94.41c-1.55-.65-2.55-2.84-3-4.34a8.39 8.39 0 014.58.65 2.92 2.92 0 00.17.36 4.51 4.51 0 001.1 1.32 4.53 4.53 0 01.04 1.57zm3.08-2.36a5 5 0 01-.85-.21h-.08A2.84 2.84 0 0114.16 42c-.8-1.46-.22-3.8.34-5.27 1.32.86 3.16 2.4 3.38 4.06a3.28 3.28 0 01-1.17 2.68zm7.19-8.3l1-5.8a2 2 0 00-.57-1.77l-4.19-4.11 5.77-.85a2 2 0 001.51-1.1l2.52-5.3 2.58 5.27a2 2 0 001.51 1.1l5.77.84-4.19 4.12a2 2 0 00-.57 1.76l1 5.8-5.15-2.73a2 2 0 00-1.88 0zM21.99 48a1 1 0 011-1h14a1 1 0 011 1v5h-16zm20 7a1 1 0 011 1v2h-26v-2a1 1 0 011-1h24zm3.83-13a2.84 2.84 0 01-1.62 1.28h-.07a6.37 6.37 0 01-.86.21 3.28 3.28 0 01-1.17-2.73c.22-1.66 2.06-3.2 3.38-4.06.56 1.45 1.14 3.79.34 5.3zm6.5-.05c-.48 1.5-1.48 3.69-3 4.34a3.26 3.26 0 01-2.94-.41 4.53 4.53 0 01.12-1.6 4.51 4.51 0 001.1-1.32c.07-.12.11-.24.17-.36a8.39 8.39 0 014.55-.7zM46.1 18.37c-1.57-.57-2.66-2.71-3.21-4.18 1.55-.22 4-.28 5.21.83a3.27 3.27 0 01.89 2.81 3.26 3.26 0 01-2.89.54zm4.67 13.8a3.23 3.23 0 01-2.43-1.69c-.7-1.52 0-3.8.71-5.23 1.25.95 3 2.62 3.08 4.29a3.25 3.25 0 01-1.36 2.63zm1.22-16.82a4.75 4.75 0 01-1-.22 3.87 3.87 0 01-.55-.25 4.52 4.52 0 00-1-1.37 3.81 3.81 0 00-.32-.24 8.45 8.45 0 01.38-4.61c1.35.8 3.27 2.25 3.56 3.9a3.27 3.27 0 01-1.07 2.79zm5.36 14.79a3.27 3.27 0 01-2.71 1.21 5.66 5.66 0 01-.58-.94 4.09 4.09 0 00.06-1 5.28 5.28 0 00-.15-.9v-.6a8.37 8.37 0 013.6-3.06c.42 1.54.74 3.92-.22 5.29zM33.99 50a1 1 0 01-1 1h-6a1 1 0 010-2h6a1 1 0 011 1z" />
						</svg>

						<h2>Upgrade to Pro</h2>

						<p>
							{__(
								'Upgrade to the Pro version and get instant full access to all premium extensions and features.',
								'blc'
							)}
						</p>

						<button className="ct-button-primary">
							{__('Upgrade Now', 'blc')}
						</button>
					</div>
				)}
			/>
		) : null
	]
}

export default useActivationAction

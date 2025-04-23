'use client';

import { Backdrop } from '@/UI';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { CloseIconTablet } from '../../../public/icons';
import { IModalProps } from './modal.types';

export const CommonModal = ({feedbackOpen, setFeedbackOpen, children }: IModalProps) => {
	useEffect(() => {
		const handleBackButton = () => {
			setFeedbackOpen(false);
			window.history.replaceState(null, '', window.location.pathname);
		};
		if (feedbackOpen) {
			window.history.pushState(null, '', window.location.pathname);
			window.addEventListener('popstate', handleBackButton);
		} else {
			window.removeEventListener('popstate', handleBackButton);
		}
		return () => window.removeEventListener('popstate', handleBackButton);
	}, [feedbackOpen]);

	return (
		<>
			<Backdrop isOpen={feedbackOpen} setIsOpen={setFeedbackOpen} increaseZ={true} />
			{ children }
		</>
	);
};

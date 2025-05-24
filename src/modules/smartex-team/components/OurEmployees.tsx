import { TeamMemberCard } from '@/components/TeamMemberCard';
import clsx from 'clsx';
import { FC } from 'react';
import { SmartexTeamContentType } from '../types';

type OurEmployeesProps = {
	content: SmartexTeamContentType;
};

export const OurEmployees: FC<OurEmployeesProps> = ({ content }) => {
	const teamMember = {
		fullname: 'Жандарбек Джумаев',
		position: 'Менеджер',
		image: '/images/team-member.png',
	};
	return (
		<section className={clsx('flex justify-center', { hidden: content !== 'Сотрудники' })}>
			<div className='w-fit grid grid-cols-3 gap-6 justify-center w1150:grid-cols-2 w550:grid-cols-1'>
				{Array(6)
					.fill(0)
					.map((el, idx) => (
						<div className='w550:odd:hidden' key={idx}>
							<TeamMemberCard
								fullname={teamMember.fullname}
								position={teamMember.position}
								image={teamMember.image}
							/>
						</div>
					))}
			</div>
		</section>
	);
};

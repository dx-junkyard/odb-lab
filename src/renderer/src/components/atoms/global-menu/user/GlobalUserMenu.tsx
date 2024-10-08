import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { User } from '@renderer/types/user';

interface GlobalUserMenuProps {
  user: User | undefined;
}

export const GlobalUserMenu = ({ user }: GlobalUserMenuProps) => {
  return (
    <div className="w-full md:min-w-[110px] min-h-[80px] bg-white flex justify-center items-center text-blue-700 border-b md:border-b-4 md:border-blue-700">
      <FontAwesomeIcon icon={faUser} className="flex-none mx-1 h-[30px]" />
      <h2 className="font-bold flex-grow text-center">
        {user?.name || 'ゲスト'}
      </h2>
    </div>
  );
};

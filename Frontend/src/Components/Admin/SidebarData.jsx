import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/admin/Dashboard',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Testing Register',
    path: '/admin/DangKyLaiThu',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Service Schedule',
    path: '/admin/LichDichVu',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Cars',
    path: '/admin/Xe',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  }
];
import React, { useEffect } from 'react';
import { Table, Button, Avatar, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store';
import { getAllContacts } from '../../Store/Contacts/actions';
import { Contact, Address } from '../../Store/Contacts/types';
import { getFullAddress } from '../../Store/Contacts/services';

import './Contacts.css'

const Contacts = () => {
  const columns = [
    {
      title: '',
      width: 100,
      key: 'avatar',
      render: (data: Contact, record: any, index: number) => <Avatar src={data.avatar} />
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      render: (data: Address, record: any, index: number) => <span>{data && getFullAddress(data)}</span>
    },
    {
      title: 'Phone number',
      dataIndex: 'phone',
      key: 'phone'
    },
    {
      title: 'Action',
      key: 'operation',
      render: (data: Contact, record: any, index: number) => (
        <Button
          type="link"
          onClick={event => {
            message.info(
              <div className="publish-message">
                <h2>You've selected:</h2>
                <div>
                  <strong>{data.name}</strong>
                </div>
                <div>from: {getFullAddress(data.address)}</div>
                <div>tel: {data.phone}</div>
              </div>
            );
          }}
        >
          Publish
        </Button>
      )
    }
  ];
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contacts);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  useEffect(() => {
    console.log(contacts.list);
  });

  return <Table rowKey="id" dataSource={contacts.list} columns={columns} />;
};

export default Contacts;

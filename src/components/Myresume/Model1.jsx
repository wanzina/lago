import React from 'react'
import { Modal, Button, Input } from 'antd';
import './MRmodal.css'
const Modal1 = ({visible1,handleOk1,handleCancel1})=>(
        <div>
          <Modal
            title="基本资料"
            visible={visible1}
            onOk={handleOk1}
            onCancel={handleCancel1}
          >
            <p><label>姓名</label> <Input placeholder="姓名"/></p>
            <p><label>手机号码</label> <Input placeholder="手机号码"/></p>
            <p><label>投递岗位</label> <Input placeholder="岗位名称"/></p>
            <p><label>期望薪资</label> <Input placeholder="期望薪资"/></p>
            <p><label>邮箱</label> <Input placeholder="邮箱"/></p>
            <p><label>工作年限</label> <Input placeholder="工作年限"/></p>
          </Modal>
        </div>
 );
   
export default Modal1

import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="panel">
      <div className="header">
        <ul className="breadcrumb">
          <li>
            <Link to="/">主页</Link>
            <span className="divider">/</span>
          </li>
          <li className="active">登录</li>
        </ul>
      </div>
      <div className="inner topic">
      <form id='signin_form' className='form-horizontal' action='/signin' method='post'>
        <div className='control-group'>
          <label className='control-label' htmlFor='name'>用户名</label>

          <div className='controls'>
            <input className='input-xlarge' id='name' name='name' size='30' type='text'/>
          </div>
        </div>
        <div className='control-group'>
          <label className='control-label' htmlFor='pass'>密码</label>

          <div className='controls'>
            <input className='input-xlarge' id='pass' name='pass' size='30' type='password'/>
          </div>
        </div>
        <input type='hidden' name='_csrf' value='nourvELC-RIIrdCETTSwJO7-IOOh_qKWlkBc'/>

        <div className='form-actions'>
          <input type='submit' className='span-primary' value='登录'/>
          <a href="/auth/github">
            <span className="span-info">
              通过 GitHub 登录
            </span>
          </a>
          <a id="forgot_password" href='/search_pass'>忘记密码了?</a>
        </div>
      </form>
      </div>
    </div>
  );
};
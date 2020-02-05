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
      <form id='signin_form' class='form-horizontal' action='/signin' method='post'>
        <div class='control-group'>
          <label class='control-label' for='name'>用户名</label>

          <div class='controls'>
            <input class='input-xlarge' id='name' name='name' size='30' type='text'/>
          </div>
        </div>
        <div class='control-group'>
          <label class='control-label' for='pass'>密码</label>

          <div class='controls'>
            <input class='input-xlarge' id='pass' name='pass' size='30' type='password'/>
          </div>
        </div>
        <input type='hidden' name='_csrf' value='nourvELC-RIIrdCETTSwJO7-IOOh_qKWlkBc'/>

        <div class='form-actions'>
          <input type='submit' class='span-primary' value='登录'/>
          <a href="/auth/github">
            <span class="span-info">
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
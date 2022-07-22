import React, { Component } from "react";
import { Github } from "react-bootstrap-icons";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="footer-text">
			<span>Made by Samuel Djekki</span>
		</div>
		<div className="icons">
			<a className="github" href="https://github.com/samu1243">
			<Github />
			</a>
		</div>
	</footer>
);

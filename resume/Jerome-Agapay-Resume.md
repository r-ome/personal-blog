# Jerome Agapay

<p class="subtitle">Software Engineer</p>

<p class="contact">
<a href="mailto:jerome.arceo.agapay@gmail.com">jerome.arceo.agapay@gmail.com</a><br>
+63 906 480 9190<br>
LinkedIn: <a href="https://www.linkedin.com/in/jerome-agapay-492998208">https://www.linkedin.com/in/jerome-agapay-492998208</a><br>
GitHub: <a href="https://github.com/r-ome/">https://github.com/r-ome/</a><br>
Website: <a href="https://www.jeromeagapay.com/">https://www.jeromeagapay.com/</a>
</p>

## Professional Summary

Full-stack developer with 7+ years of experience, specializing in back-end development with JavaScript and Node.js. Strong analytical skills with a focus on cloud technologies and AWS solutions. Recently building local-first RAG (Retrieval-Augmented Generation) systems in Python. Known for quickly learning new technologies and adapting to different business requirements across various industries.

## Technical Skills

**Programming Languages:** JavaScript, TypeScript, Python, PHP 7.x
**Frontend Technologies:** ReactJS, Redux, React Native, jQuery, Tailwind CSS, Ant Design, NextJS
**Backend Technologies:** Node.js, Express.js, Serverless Framework, Redis, Laravel, FastAPI
**Databases:** PostgreSQL, MySQL, MariaDB, Aurora Serverless v2, Liquibase, SQLite
**AI/RAG:** LlamaIndex, Ollama, RAG pipelines, vector search (Qdrant, ChromaDB), hybrid retrieval & reranking, embeddings, RAGAS evals
**Cloud/AWS:** Lambda, API Gateway, RDS, S3, S3 Glacier, CloudFront, Cognito, CloudWatch, SQS, EC2, Amplify, CDK
**AI Tools:** Claude Code, Anthropic API, AI-assisted development, LLM integration
**Development Tools:** Git, Docker, CI/CD pipelines, Agile/Scrum methodologies
**Operating Systems:** Linux (Ubuntu), macOS, Windows

## Certifications

AWS Certified Solutions Architect - Associate (SAA-C03), Oct 2025
Credly Badge: <a href="https://www.credly.com/badges/785dceab-7921-4e55-92f0-bc7a2daea3a7">https://www.credly.com/badges/785dceab-7921-4e55-92f0-bc7a2daea3a7</a>

## Professional Experience

### Senior Software Engineer | <span class="company">Healthylife Company Pty Ltd</span> | <span class="date">Jul 2022 - May 2024</span>
<p class="role-sub">E-commerce and digital health &amp; wellness platform</p>

- Fixed UI bugs including user interaction issues and data display problems across the platform.
- Built new UI features while maintaining and improving existing legacy codebase.
- Ensured mobile responsiveness across the website for optimal user experience on all devices.
- Worked with legacy code challenges including jQuery and older CSS, successfully modernizing components.

**Technologies:** HTML, CSS, jQuery, SASS, Tailwind CSS, PHP, Laravel

### Senior Software Engineer | <span class="company">PayMaya Philippines Inc.</span> | <span class="date">May 2021 - Jul 2022</span>
<p class="role-sub">Business management platform for payment, banking, and loan solutions</p>

- Built CRUD operations using AWS Lambda and Serverless Framework for both frontend (React) and backend (Node.js).
- Integrated SQS to handle file processing for disbursement feature - users upload Excel files with thousands of rows for money distribution.
- Performed load testing on SQS and Lambda integration to optimize upload times and improve processing speed.
- Participated in code reviews and bi-weekly sprint planning with development team, QA, and business stakeholders.

**Technologies:** React 17, Redux, ES6, Node.js, AWS Lambda, SQS, RDS, S3, Serverless Framework

### Tech Lead | <span class="company">BotBros AI, Rocket Labs Consulting Inc.</span> | <span class="date">Jun 2017 - Jan 2021</span>

**Airship Logistics Management System**
<p class="role-sub">Courier tracking and delivery platform for logistics businesses</p>

- Led full-stack development of logistics management system handling bookings, agent management, and cash flow operations.
- Facilitated Agile processes including sprint planning, daily stand-ups, retrospectives, and code reviews.
- Researched and implemented AWS cloud solutions and emerging technologies for scalable architecture decisions.
- Collaborated with stakeholders during project planning to define requirements and optimize development workflows.

**Achievement:** Won Top 3 position in IdeaSpace Acceleration Program for innovative logistics solution.

**Technologies:** ReactJS, Redux, Node.js, Serverless, AWS Lambda, API Gateway, RDS, Cognito, CloudWatch, CloudFront, S3

**PeopleServe - Human Resource Information System**
<p class="role-sub">Recruitment and staffing solutions platform</p>

- Collaborated with clients during initial planning phases to ensure clear requirements and realistic project timelines.
- Provided technical mentorship to interns and junior developers, improving team onboarding and skill development.
- Delivered post-deployment support including troubleshooting and technical issue resolution.

**Technologies:** Laravel 5.2, ReactJS, Redux, MariaDB, MySQL 5.6

**Additional Projects:**

- Entrego Booking Website: Developed responsive homepage, booking system, and reusable React components in collaboration with Zalora team.
- Chatbot Solutions: Built Facebook Messenger and Slack bots with system integrations using Botkit JS and Node.js.
- Company Website: Designed and developed brand-focused website using Ghost CMS.

### QA Intern | <span class="company">Ideyatech, Inc.</span> | <span class="date">Oct 2016 - Jan 2017</span>
<p class="role-sub">G-Force Dance Center - Reservation and booking platform</p>

- Designed and implemented comprehensive test cases, improving test coverage for web application features.
- Performed manual testing of website functionality, identifying bugs and ensuring optimal user experience.

## Personal Projects

**PH Law RAG - Retrieval-Augmented Generation Assistant** <span class="date">| Apr 2026 - Present</span>
<p class="role-sub">Local-first RAG assistant over Philippine law primary sources, running entirely on a local LLM</p>

- Built a hybrid retrieval pipeline combining dense vector search (Qdrant) with sparse BM25, followed by cross-encoder reranking for higher answer relevance.
- Implemented incremental document sync via content hashing so re-runs skip unchanged statutes.
- Delivered grounded generation that cites article/section numbers and abstains when the corpus can't support an answer.
- Measured answer quality with RAGAS semantic eval metrics; shipped a Streamlit chat UI and a FastAPI service.

**Technologies:** Python, LlamaIndex, Ollama (Mistral), Qdrant, BM25, cross-encoder reranking, RAGAS, FastAPI, Streamlit, SQLite, Docker

**AWS & Amazon Bedrock Docs RAG Lab - Documentation Q&A System** <span class="date">| Apr 2026</span>
<p class="role-sub">Local-first RAG system over curated AWS and Amazon Bedrock documentation with grounded citations</p>

- Built a document ingestion pipeline that fetches an allowlist of AWS and Amazon Bedrock pages, normalizes HTML to clean text, and detects changes via content hashing to only reprocess what changed.
- Curated Bedrock documentation covering model inference, Knowledge Bases, Guardrails, Agents, Flows, batch inference, and evaluations as the primary RAG corpus.
- Chunked and embedded documents locally with sentence-transformers and stored vectors in ChromaDB, tracking metadata and versions in SQLite.
- Exposed the pipeline through both a Typer CLI and a FastAPI service, with an eval harness scoring answers against a question dataset.

**Technologies:** Python, Ollama, sentence-transformers, ChromaDB, FastAPI, Typer, SQLite, BeautifulSoup, Amazon Bedrock docs

**PSILO - Personal Cloud Storage** <span class="date">| Feb 2026 - Apr 2026</span>
<p class="role-sub">Self-hosted image storage platform built as an alternative to commercial cloud storage solutions</p>

- Architected and built a full-stack personal cloud storage app using AWS CDK for infrastructure-as-code, provisioning Cognito, API Gateway, Lambda, SQS, Aurora Serverless v2, and S3 Glacier Flexible Retrieval.
- Implemented cost-optimized cold storage using S3 Glacier Flexible Retrieval, significantly reducing hosting costs compared to standard S3.
- Designed monorepo structure separating frontend (Next.js), infrastructure (CDK stacks), and Lambda services for clean architecture and maintainability.
- Applied Backend for Frontends (BFF) pattern with decoupled async photo metadata processing via SQS and Dead Letter Queue for reliability.
- Used Aurora Data API with Lambda (no VPC/NAT gateway) to simplify database connectivity and reduce infrastructure complexity.
- Integrated Drizzle ORM with Aurora Serverless v2 with database migrations for type-safe SQL and version-controlled schema management.

**Technologies:** Next.js, TypeScript, Node.js, AWS CDK, Lambda, API Gateway, Aurora Serverless v2, S3 Glacier, Cognito, SQS, Drizzle ORM

**Inventory Management System** <span class="date">| May 2025 - Present</span>
<p class="role-sub">Client project - Digital inventory system replacing Excel-based workflows</p>

- Built inventory management system for client to replace error-prone Excel-based tracking, preventing data duplication and loss.
- Implemented RPC approach instead of REST since no public APIs were needed.
- Applied clean architecture principles to improve code organization and maintainability.
- Deployed on Vercel for reliable hosting and easy client access.

**Technologies:** Next.js, TypeScript, Clean Architecture, RPC, Vercel

## Education

Bachelor of Science in Information Technology
Polytechnic University of the Philippines | 2013 - 2017

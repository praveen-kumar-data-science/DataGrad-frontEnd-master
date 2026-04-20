import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

interface PortalLesson {
  title: string;
  topics: string[];
}

interface PortalSection {
  id: string;
  label: string;
  description: string;
  lessons: PortalLesson[];
}

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.css'
})
export class PortalComponent {
  readonly trainingSections: PortalSection[] = [
    {
      id: 'sql',
      label: 'SQL',
      description: 'Foundational SQL through interview-grade analytics patterns and practice loops.',
      lessons: [
        { title: 'Basics', topics: ['SQL foundations', 'tables, rows, columns', 'query structure'] },
        { title: 'Select statements', topics: ['alias', 'new column expressions'] },
        { title: 'Filters', topics: ['operators', 'string filters', 'number ranges', 'LIKE', 'IN', 'EXCEPT', 'ALL'] },
        { title: 'Joins', topics: ['left join', 'right join', 'inner join', 'full join', 'cross join'] },
        { title: 'Aggregations', topics: ['GROUP BY', 'SUM', 'MIN', 'MAX'] },
        { title: 'Ordering', topics: ['ORDER BY ascending', 'ORDER BY descending'] },
        { title: 'Window functions', topics: ['PARTITION BY', 'RANK', 'ROW_NUMBER', 'DENSE_RANK', 'MIN', 'MAX', 'AVG', 'SUM', 'running total', '7-day average', 'constantly increasing/decreasing trends'] },
        { title: 'CTE and recursive CTE', topics: ['generate datasets', 'layered logic', 'recursive patterns'] },
        { title: 'Practice and evaluation', topics: ['LeetCode challenge', 'quiz and written test', 'interview preparation'] }
      ]
    },
    {
      id: 'pyspark',
      label: 'PySpark',
      description: 'Mirror core SQL logic in Spark to build hands-on distributed data engineering fluency.',
      lessons: [
        { title: 'Replicate the same SQL', topics: ['translate SQL logic into PySpark', 'DataFrame transformations', 'Spark equivalents for joins, filters, aggregations, and windows'] }
      ]
    },
    {
      id: 'python',
      label: 'Python',
      description: 'Interview-focused Python foundations, data structures, and applied algorithm patterns.',
      lessons: [
        { title: 'Variables', topics: ['types', 'assignment', 'basic operations'] },
        { title: 'Loops', topics: ['for loops', 'while loops'] },
        { title: 'Data structures', topics: ['list', 'dict', 'set', 'string', 'tuple', 'accessing elements', 'modifying elements'] },
        { title: 'Algorithms', topics: ['sliding window', 'binary search', 'linear search', 'cost optimization'] },
        { title: 'Practice and evaluation', topics: ['LeetCode challenge', 'quiz and written test', 'interview preparation'] }
      ]
    },
    {
      id: 'databricks',
      label: 'Databricks',
      description: 'Certification-aligned Databricks engineering, optimization, governance, workflows, and project delivery.',
      lessons: [
        { title: 'Certifications', topics: ['Data Engineer Associate', 'Data Engineer Advanced'] },
        { title: 'Associate-level optimization', topics: ['optimize command', 'ZORDER', 'partitions'] },
        { title: 'File types', topics: ['parquet pros and cons', 'avro pros and cons', 'csv pros and cons', 'json pros and cons', 'delta pros and cons'] },
        { title: 'Spark internals', topics: ['Spark architecture', 'Spark plans and DAGs', 'cost optimizer', 'AQE', 'ANALYZE TABLE command'] },
        { title: 'Data ingestion and quality', topics: ['ingestion patterns', 'Auto Loader', 'data quality checks'] },
        { title: 'Table engineering', topics: ['manual table creation', 'CRUD operations', 'managed vs external tables', 'Delta Lake', 'Delta tables', 'joins'] },
        { title: 'Platform architecture', topics: ['Medallion architecture', 'choosing clusters and storage', 'Spark UI'] },
        { title: 'Unity Catalog', topics: ['pros', 'permissions', 'row-based access', 'column-based access', 'auditing', 'lineage'] },
        { title: 'Optimizations', topics: ['storage optimization', 'compute optimization', 'query code optimization', 'liquid clustering', 'small files', 'spills', 'shuffles', 'skew', 'Photon', 'AQE'] },
        { title: 'Project buildout', topics: ['workflow', 'DLT', 'big data from Kaggle', 'ETL pipeline', 'all 3 tests'] },
        { title: 'DAB and sharing', topics: ['DAB', 'Delta Sharing cloud-to-cloud'] },
        { title: 'Streaming and CDC', topics: ['structured streaming', 'checkpointing', 'modes', 'read patterns', 'write patterns', 'MERGE INTO', 'delta log streaming', 'auto CDC'] },
        { title: 'Final delivery', topics: ['demo', 'documentation', 'video'] }
      ]
    },
    {
      id: 'ai',
      label: 'AI Projects',
      description: 'Databricks AI certification themes plus production-flavored retrieval, vector, and migration projects.',
      lessons: [
        { title: 'AI certification', topics: ['Databricks AI certification path'] },
        { title: 'RAG applications', topics: ['use RAGs', 'retrieval design', 'knowledge-grounded answers'] },
        { title: 'AI for Spark optimization', topics: ['use AI to optimize configs of big data Spark projects'] },
        { title: 'Pinecone operations', topics: ['CRUD in Pinecone'] },
        { title: 'Delta to Pinecone migration', topics: ['NLP pipeline', 'embeddings', 'migration design'] },
        { title: 'Project delivery', topics: ['demo', 'documentation', 'video'] }
      ]
    },
    {
      id: 'internship',
      label: 'Internship Projects',
      description: 'Group and industry-style project work that strengthens collaborative delivery proof.',
      lessons: [
        { title: 'Industry-specific project track', topics: ['internship-style execution', 'group projects', 'industry-specific scenarios'] }
      ]
    },
    {
      id: 'job',
      label: 'Job Readiness',
      description: 'Positioning, outreach, interview preparation, and execution systems for US big data engineering roles.',
      lessons: [
        { title: 'Resume', topics: ['one-page resume', 'ATS optimization', 'AI-based optimization', 'real examples'] },
        { title: 'GitHub profile', topics: ['monthly commits', 'project consistency'] },
        { title: 'LeetCode profile', topics: ['profile setup', 'consistent practice trail'] },
        { title: 'Personal website', topics: ['GitHub.io site'] },
        { title: 'LinkedIn masterclass', topics: ['profile visibility increase', 'role-specific tailoring', 'keyword optimization', 'regular posts', 'tags'] },
        { title: 'Application assets', topics: ['cover letter'] },
        { title: 'Mock interviews', topics: ['profile review tracker', 'industry-level feedback', 'SQL questions', 'PySpark questions', 'Python questions', 'Databricks project questions', 'architecture interview'] },
        { title: 'Networking strategy', topics: ['LinkedIn reach-out templates', 'email templates'] },
        { title: 'Job search system', topics: ['one job platform for US big data engineer roles', 'LinkedIn-based posts', 'email-based updates'] }
      ]
    },
    {
      id: 'behavioral',
      label: 'Behavioral',
      description: 'Behavioral interview preparation to complement the technical track.',
      lessons: [
        { title: 'Behavioral questions', topics: ['story framing', 'impact communication', 'ownership', 'conflict handling', 'leadership examples'] }
      ]
    },
    {
      id: 'optional-ms',
      label: 'Optional US MS Path',
      description: 'Extra support for candidates planning to study in the US before transitioning into the market.',
      lessons: [
        { title: 'University and visa support', topics: ['university selection', 'visa guidance'] },
        { title: 'Funding strategies', topics: ['internship planning', 'TA strategies', 'RA full funding strategies'] },
        { title: 'Outreach templates', topics: ['email templates'] }
      ]
    }
  ];
  selectedSectionId = this.trainingSections[0].id;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  get currentUser(): string | null {
    return this.authService.getCurrentUser();
  }

  get selectedSection(): PortalSection {
    return this.trainingSections.find(section => section.id === this.selectedSectionId) ?? this.trainingSections[0];
  }

  selectSection(sectionId: string): void {
    this.selectedSectionId = sectionId;
  }

  logout(): void {
    this.authService.logout();
    void this.router.navigate(['/']);
  }
}
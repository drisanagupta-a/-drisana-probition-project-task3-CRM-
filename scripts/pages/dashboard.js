document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const store = window.TaskCRMStore;
  const view = window.TaskCRMView;
  const helpers = window.TaskCRMHelpers;

  if (!store.isAuthenticated()) {
    window.location.replace('login.html');
    return;
  }

  view.setupShell('dashboard');

  const statsContainer = document.getElementById('dashboardStatsContainer');
  const activityContainer = document.getElementById('recentActivitiesContainer');
  const salesBreakdownContainer = document.getElementById('salesBreakdownContainer');

  function renderMetrics() {
    if (!statsContainer) return;

    const stats = store.getDashboardStats();

    const statCardsHtml = `
      ${view.renderStatCell('Total Customers', helpers.formatNumber(stats.totalCustomers), {
        hint: `${stats.activeCustomers} active customers`
      })}
      ${view.renderStatCell('Total Leads', helpers.formatNumber(stats.totalLeads), {
        hint: `${stats.convertedLeads} converted leads`
      })}
      ${view.renderStatCell('Total Sales', helpers.formatCurrency(stats.totalSales), {
        highlight: true,
        hint: 'Total revenue to date'
      })}
      ${view.renderStatCell('Pending Tasks', helpers.formatNumber(stats.pendingTasks), {
        hint: 'Tasks that still need attention'
      })}
    `;

    statsContainer.innerHTML = statCardsHtml;
  }

  function renderActivities() {
    if (!activityContainer) return;

    const activities = store.getActivities(7);

    if (!activities || activities.length === 0) {
      activityContainer.innerHTML = view.renderEmptyState(
        'No recent activities',
        'System events, status changes, and task updates will appear here in chronological order.'
      );
      return;
    }

    const itemsHtml = activities
      .map(activity => view.renderActivityItem(activity))
      .join('');

    activityContainer.innerHTML = `<div class="activity-stream">${itemsHtml}</div>`;
  }

  function renderSalesDistribution() {
    if (!salesBreakdownContainer) return;

    const sales = store.getSales();

    if (!sales || sales.length === 0) {
      salesBreakdownContainer.innerHTML =
        '<p class="text-muted" style="padding: var(--space-4);">No sales logged.</p>';
      return;
    }

    const maxSale = Math.max(...sales.map(sale => sale.amount), 1);

    const rowsHtml = sales.slice(0, 5).map(sale => {
      const percentage = Math.round((sale.amount / maxSale) * 100);

      return `
        <div style="padding: var(--space-3) var(--space-6); border-bottom: var(--border-rule);">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px;">
            <span style="font-weight: var(--weight-semibold); font-size: var(--text-sm);">
              ${helpers.escapeHtml(sale.customer)}
            </span>
            <span class="tabular-nums" style="font-weight: var(--weight-bold); font-size: var(--text-sm);">
              ${helpers.formatCurrency(sale.amount)}
            </span>
          </div>

          <div style="height: 6px; background-color: var(--color-surface-hover); border-radius: 1px; overflow: hidden;">
            <div style="width: ${percentage}%; height: 100%; background-color: var(--color-accent);"></div>
          </div>
        </div>
      `;
    }).join('');

    salesBreakdownContainer.innerHTML = `
      <div style="display: flex; flex-direction: column;">
        ${rowsHtml}
      </div>
    `;
  }

  renderMetrics();
  renderActivities();
  renderSalesDistribution();

  const resetDemoBtn = document.getElementById('resetDataBtn');

  if (resetDemoBtn) {
    resetDemoBtn.addEventListener('click', () => {
      store.resetToSeeds();
      renderMetrics();
      renderActivities();
      renderSalesDistribution();
    });
  }
});
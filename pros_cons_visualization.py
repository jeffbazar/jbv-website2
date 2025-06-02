import matplotlib.pyplot as plt
import numpy as np

# Create figure
plt.figure(figsize=(14, 10))

# Define categories and their respective pros and cons
categories = ['Product Approach', 'Security & Compliance', 'AI Integration', 'Market Position', 'Business Model']

# SimplAI pros and cons
simplai_pros = [
    'Complete managed package with minimal setup',
    'Enterprise-grade security and compliance out-of-box',
    'Point-and-click integration with 300+ services',
    'Specialized for regulated industries',
    'White-glove service shortens time-to-value'
]

simplai_cons = [
    'Closed-source limits community contributions',
    'Premium pricing may be cost-prohibitive',
    'Limited customization options',
    'Risk of being overshadowed by cloud providers',
    'Long, complex enterprise sales cycles'
]

# Open-source pros and cons
opensource_pros = [
    'Broad developer community and rapid innovation',
    'Free core product with transparent code',
    'Deep customization and plugin development',
    'Lower cost of entry for organizations',
    'No vendor lock-in'
]

opensource_cons = [
    'Requires technical expertise to implement',
    'Manual security configuration needed',
    'Self-hosting adds operational overhead',
    'Less specialized for regulated industries',
    'Limited enterprise support without paid tiers'
]

# Set positions for the bars
pos = np.arange(len(categories))
bar_width = 0.35

# Create the figure with two subplots side by side
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(16, 10))

# SimplAI pros and cons (left subplot)
ax1.barh(pos, [1]*len(categories), bar_width, color='#4472C4', alpha=0.7, label='Pros')
ax1.barh(pos + bar_width, [1]*len(categories), bar_width, color='#ED7D31', alpha=0.7, label='Cons')

# Open-source pros and cons (right subplot)
ax2.barh(pos, [1]*len(categories), bar_width, color='#4472C4', alpha=0.7, label='Pros')
ax2.barh(pos + bar_width, [1]*len(categories), bar_width, color='#ED7D31', alpha=0.7, label='Cons')

# Set y-axis labels
ax1.set_yticks(pos + bar_width / 2)
ax1.set_yticklabels(categories)
ax2.set_yticks(pos + bar_width / 2)
ax2.set_yticklabels(categories)

# Set titles
ax1.set_title('SimplAI', fontsize=16, fontweight='bold')
ax2.set_title('Open-Source Automation Tools', fontsize=16, fontweight='bold')
fig.suptitle('Pros and Cons Comparison', fontsize=18, fontweight='bold', y=0.98)

# Remove x-axis ticks and labels
ax1.set_xticks([])
ax2.set_xticks([])

# Add text annotations for SimplAI
for i, (pro, con) in enumerate(zip(simplai_pros, simplai_cons)):
    ax1.text(0.5, i - 0.05, pro, ha='center', va='center', fontsize=9, 
             bbox=dict(boxstyle='round,pad=0.5', facecolor='#4472C4', alpha=0.1))
    ax1.text(0.5, i + bar_width + 0.05, con, ha='center', va='center', fontsize=9,
             bbox=dict(boxstyle='round,pad=0.5', facecolor='#ED7D31', alpha=0.1))

# Add text annotations for Open-source
for i, (pro, con) in enumerate(zip(opensource_pros, opensource_cons)):
    ax2.text(0.5, i - 0.05, pro, ha='center', va='center', fontsize=9,
             bbox=dict(boxstyle='round,pad=0.5', facecolor='#4472C4', alpha=0.1))
    ax2.text(0.5, i + bar_width + 0.05, con, ha='center', va='center', fontsize=9,
             bbox=dict(boxstyle='round,pad=0.5', facecolor='#ED7D31', alpha=0.1))

# Add legends
ax1.legend(loc='upper center', bbox_to_anchor=(0.5, -0.05), ncol=2)
ax2.legend(loc='upper center', bbox_to_anchor=(0.5, -0.05), ncol=2)

# Adjust layout
plt.tight_layout()
plt.subplots_adjust(top=0.9)

# Save the figure
plt.savefig('/home/ubuntu/visualizations/pros_cons_comparison.png', dpi=300, bbox_inches='tight')
plt.close()

print("Pros and cons visualization created successfully!")
